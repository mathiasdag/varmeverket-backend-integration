/**
 * Global Link Router Utility
 *
 * Centralized logic for handling different types of links across the application:
 * - Internal links with Payload references
 * - External links
 * - Copy actions
 */

export interface LinkGroup {
  type: 'internal' | 'external' | 'copy';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference?: any; // Payload reference object
  url?: string;
  text?: string;
}

export interface LinkRouterResult {
  href?: string;
  isExternal: boolean;
  isCopy: boolean;
  shouldRenderAsButton: boolean;
}

/**
 * Resolves a Payload reference object to a URL path
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolveReference(reference: any): string | undefined {
  if (!reference) return undefined;

  // Handle Payload's reference structure: { relationTo: "pages", value: {...} }
  if (
    typeof reference === 'object' &&
    'relationTo' in reference &&
    'value' in reference &&
    reference.value?.slug
  ) {
    const collection = reference.relationTo;
    const slug = reference.value.slug;

    switch (collection) {
      case 'spaces':
        return `/spaces/${slug}`;
      case 'articles':
        return `/artikel/${slug}`;
      case 'pages':
      default:
        return `/${slug}`;
    }
  }

  // Handle direct object structure: { slug: "...", collection: "..." }
  if (
    typeof reference === 'object' &&
    'slug' in reference &&
    !('relationTo' in reference)
  ) {
    const slug = reference.slug;
    const collection = reference.collection;

    switch (collection) {
      case 'spaces':
        return `/spaces/${slug}`;
      case 'articles':
        return `/artikel/${slug}`;
      case 'pages':
      default:
        return `/${slug}`;
    }
  }

  // If reference is just an ID string
  if (typeof reference === 'string') {
    return `/${reference}`;
  }

  // Fallback for unpopulated references or invalid objects
  console.warn('Invalid reference object:', reference);
  return undefined;
}

/**
 * Main link router function that processes LinkGroup objects
 */
export function routeLink(link: LinkGroup): LinkRouterResult {
  const result: LinkRouterResult = {
    href: undefined,
    isExternal: false,
    isCopy: false,
    shouldRenderAsButton: false,
  };

  switch (link.type) {
    case 'external':
      result.href = link.url || '#';
      result.isExternal = true;
      break;

    case 'internal':
      const resolvedHref = resolveReference(link.reference);
      result.href = resolvedHref || '#';
      result.isExternal = false;
      if (!resolvedHref) {
        console.warn('Failed to resolve reference:', link.reference);
      }
      break;

    case 'copy':
      result.href = link.text || '';
      result.isCopy = true;
      result.shouldRenderAsButton = true;
      break;

    default:
      console.warn('Unknown link type:', link.type);
      result.href = '#';
  }

  // Ensure href is always a string
  if (typeof result.href !== 'string') {
    console.error('Non-string href detected:', result.href, 'from link:', link);
    result.href = '#';
  }

  return result;
}

/**
 * Legacy function for backward compatibility
 * Handles the old pattern where components pass individual parameters
 */
export function routeLegacyLink(
  type: 'internal' | 'external' | 'copy',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference?: any,
  url?: string,
  text?: string
): LinkRouterResult {
  return routeLink({
    type,
    reference,
    url,
    text,
  });
}

/**
 * Utility to check if a URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http') || url.startsWith('//');
}

/**
 * Utility to get the appropriate target and rel attributes for external links
 */
export function getExternalLinkAttributes() {
  return {
    target: '_blank' as const,
    rel: 'noopener noreferrer' as const,
  };
}
