import type { CollectionConfig } from 'payload';
import { commonHooks } from '@/utils/hooks';

const Showcases: CollectionConfig = {
  slug: 'showcases',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: false,
    },
    {
      name: 'year',
      type: 'number',
      required: false,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'assets',
      type: 'blocks',
      required: false,
      blocks: [
        {
          slug: 'imageWithCaption',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'caption',
              type: 'text',
              required: false,
            },
          ],
        },
        {
          slug: 'videoWithCaption',
          fields: [
            {
              name: 'host',
              type: 'select',
              label: 'Video Host',
              required: true,
              defaultValue: 'mux',
              options: [{ label: 'Mux', value: 'mux' }],
            },
            {
              name: 'playbackId',
              type: 'text',
              label: 'Mux Playback ID',
              required: true,
            },
            {
              name: 'autoplay',
              type: 'checkbox',
              label: 'Autoplay',
              defaultValue: false,
            },
            {
              name: 'controls',
              type: 'checkbox',
              label: 'Show Controls',
              defaultValue: false,
            },
            {
              name: 'caption',
              type: 'text',
              required: false,
            },
          ],
        },
        {
          slug: 'text',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: false,
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    beforeValidate: [commonHooks.slugFromTitle],
  },
};

export default Showcases;
