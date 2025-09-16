# Värmeverket Backend Integration Package

## 🎯 What This Is

This package contains all the backend/CMS components from the Värmeverket platform that need to be integrated into your existing external Payload database setup.

## 📦 Contents

- **8 Collections** - Users, Media, Pages, Articles, Spaces, Tags, Navigation, Showcases
- **20+ Blocks** - All custom blocks for content creation
- **Custom Fields** - SEO fields, link groups, inline headers
- **Access Controls** - Authentication and authorization
- **Utilities** - Hooks, validation, slug generation

## 🚀 Quick Start

1. **Copy files** to your existing backend project
2. **Update imports** to match your project structure
3. **Add collections** to your payload.config.ts
4. **Install dependencies** (see package.json requirements)
5. **Test integration** using the checklist

## 📋 Integration Steps

See `BACKEND_INTEGRATION_PACKAGE.md` for detailed integration instructions.

## 🔧 Dependencies

- Payload 3.44.0
- @payloadcms/richtext-lexical
- sharp (for image processing)

## 📊 Collections Overview

| Collection | Purpose                   | Key Fields                                    |
| ---------- | ------------------------- | --------------------------------------------- |
| Users      | Authentication & profiles | email, firstName, lastName, bylineDescription |
| Media      | File uploads              | alt text, file uploads                        |
| Pages      | Main content pages        | title, slug, layout (blocks), SEO             |
| Articles   | Blog posts                | title, author, publishedDate, tags, layout    |
| Spaces     | Physical spaces/rooms     | title, capacity, areaSize, layout             |
| Tags       | Content categorization    | name, description                             |
| Navigation | Site menus                | name, menuItems (blocks)                      |
| Showcases  | Portfolio content         | title, year, featuredImage, assets            |

## 🧩 Blocks Overview

### Global Blocks

- AssetText, Calendar, CTA, HighlightGrid, List, MinimalCarousel, QA, QAGroup

### Page Blocks

- CardGrid, Carousel, CourseCatalog, FAQ, Header, HorizontalCardBlock, Router, Spotlight

### Article Blocks

- Image, Quote, Text, Video

## 🔗 API Endpoints

Once integrated, these endpoints will be available:

- `/api/users` - User management
- `/api/media` - File uploads
- `/api/pages` - Page content
- `/api/articles` - Article content
- `/api/spaces` - Space information
- `/api/tags` - Content tags
- `/api/navigation` - Site navigation
- `/api/showcases` - Portfolio content

## 🚨 Important Notes

- **Version Compatibility**: Tested with Payload 3.44.0
- **Import Paths**: Update relative imports to match your project structure
- **Collection Conflicts**: Check for slug conflicts with existing collections
- **Access Controls**: Verify compatibility with your user authentication system

## 📞 Support

- Check `BACKEND_MIGRATION_INVENTORY.md` for detailed component descriptions
- All files include inline documentation
- Contact frontend team for integration support

---

**Source:** Värmeverket Platform v0.1.0-coupled-db  
**Integration Target:** External Payload Database  
**Date:** January 2025
