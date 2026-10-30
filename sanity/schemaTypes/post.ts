import { defineField, defineType } from 'sanity';
import { DocumentTextIcon } from '@sanity/icons';

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Speed-to-Lead & Follow-Up', value: 'Speed-to-Lead & Follow-Up' },
          { title: 'Real Estate CRM Architecture', value: 'Real Estate CRM Architecture' },
          { title: 'Mortgage & Loan Officer Systems', value: 'Mortgage & Loan Officer Systems' },
          { title: 'Database & Sphere Reactivation', value: 'Database & Sphere Reactivation' },
          { title: 'GoHighLevel Automations', value: 'GoHighLevel Automations' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'Speed-to-Lead & Follow-Up',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Realtor-Go Team',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authorBio',
      title: 'Author Bio',
      type: 'text',
      rows: 3,
      initialValue:
        'CRM Architecture & GoHighLevel Automation Specialists for top-producing real estate teams and mortgage loan officers across the US & Canada.',
      description: 'A short biography of the author.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Image Caption',
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'Used for blog cards and preview descriptions (150-160 chars recommended).',
      validation: (rule) => rule.max(300).warning('Keep it concise for cards and SEO.'),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Overrides standard title in search engines if provided.',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
  orderings: [
    {
      title: 'Publication Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});
