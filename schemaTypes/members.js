
// schemas/members.js
export default {
  name: 'members',
  title: 'Honorable Members',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'OUR HONORABLE MEMBERS'
    },
    {
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'text',
      rows: 2
    },
    {
      name: 'members',
      title: 'Members List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Full Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'title',
              title: 'Title/Prefix (Mr., Dr., etc.)',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description/Role',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            },
            {
              name: 'image',
              title: 'Member Photo',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text for image'
                }
              ]
            },
            {
              name: 'specialization',
              title: 'Areas of Specialization',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                layout: 'tags'
              }
            },
            {
              name: 'isFeatured',
              title: 'Featured Member',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'isActive',
              title: 'Active Member',
              type: 'boolean',
              initialValue: true
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: Rule => Rule.integer().positive()
            },
            {
              name: 'socialLinks',
              title: 'Social Media Links',
              type: 'object',
              fields: [
                {
                  name: 'linkedin',
                  title: 'LinkedIn URL',
                  type: 'url'
                },
                {
                  name: 'twitter',
                  title: 'Twitter URL',
                  type: 'url'
                },
                {
                  name: 'website',
                  title: 'Personal Website',
                  type: 'url'
                }
              ]
            },
            {
              name: 'bio',
              title: 'Detailed Biography',
              type: 'text',
              rows: 5
            },
            {
              name: 'achievements',
              title: 'Key Achievements',
              type: 'array',
              of: [{ type: 'string' }]
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
              media: 'image'
            }
          }
        }
      ]
    },
    {
      name: 'styling',
      title: 'Section Styling',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          initialValue: '#ffffff'
        },
        {
          name: 'titleColor',
          title: 'Title Color',
          type: 'string',
          initialValue: '#000000'
        },
        {
          name: 'highlightColor',
          title: 'Highlight Color (for "माननीय ")',
          type: 'string',
          initialValue: '#FFB338'
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          initialValue: '#ffffff'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle'
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Honorable Members Section',
        subtitle: subtitle || 'Members configuration'
      };
    }
  }

};