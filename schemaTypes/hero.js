<<<<<<< HEAD
// sanity/schemas/hero.js
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'object',
      fields: [
        {
          name: 'line1',
          title: 'First Line (Name)',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'researchText',
          title: 'Research Text',
          type: 'string',
          initialValue: 'Research'
        },
        {
          name: 'andText',
          title: 'And Text',
          type: 'string',
          initialValue: ' & '
        },
        {
          name: 'studyText',
          title: 'Study Text',
          type: 'string',
          initialValue: 'Study'
        },
        {
          name: 'centerText',
          title: 'Center Text',
          type: 'string',
          initialValue: ' center'
        }
      ]
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'buttons',
      title: 'Action Buttons',
      type: 'object',
      fields: [
        {
          name: 'button1',
          title: 'First Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'Button URL',
              type: 'string'
            },
            {
              name: 'isVisible',
              title: 'Show Button',
              type: 'boolean',
              initialValue: true
            }
          ]
        },
        {
          name: 'button2',
          title: 'Second Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'Button URL',
              type: 'string'
            },
            {
              name: 'isVisible',
              title: 'Show Button',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ]
    },
    {
      name: 'sidebarSections',
      title: 'Sidebar Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            },
            {
              name: 'icon',
              title: 'Icon Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: Rule => Rule.required().min(1).max(4)
            },
            {
              name: 'isActive',
              title: 'Show Section',
              type: 'boolean',
              initialValue: true
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'icon',
              order: 'order'
            },
            prepare(selection) {
              const {title, subtitle, media, order} = selection
              return {
                title: `${order}. ${title}`,
                subtitle: subtitle,
                media: media
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1).max(4)
    },
    {
      name: 'portraitImages',
      title: 'Portrait Images',
      type: 'object',
      fields: [
        {
          name: 'mainPortrait',
          title: 'Main Portrait Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'altText',
          title: 'Alt Text for Images',
          type: 'string',
          initialValue: 'Rahul Sankrityayan Portrait'
        },
        {
          name: 'showMultipleCopies',
          title: 'Show Multiple Copies',
          type: 'boolean',
          initialValue: true,
          description: 'Show the same image in all 4 portrait containers'
        }
      ]
    },
    {
      name: 'styling',
      title: 'Styling Options',
      type: 'object',
      fields: [
        {
          name: 'primaryColor',
          title: 'Primary Color (Research/Study text)',
          type: 'string',
          initialValue: '#FFB222'
        },
        {
          name: 'buttonColor',
          title: 'Button Background Color',
          type: 'string',
          initialValue: '#FFB222'
        },
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          initialValue: '#ffffff'
        },
        {
          name: 'textColor',
          title: 'Main Text Color',
          type: 'string',
          initialValue: '#000000'
        },
        {
          name: 'subtitleColor',
          title: 'Subtitle Color',
          type: 'string',
          initialValue: '#5C5C5C'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'mainHeading.line1',
      subtitle: 'subtitle',
      media: 'portraitImages.mainPortrait'
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: `Hero: ${title || 'No Title'}`,
        subtitle: subtitle || 'No Subtitle',
        media: media
      }
    }
  }
=======
// sanity/schemas/hero.js
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'object',
      fields: [
        {
          name: 'line1',
          title: 'First Line (Name)',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'researchText',
          title: 'Research Text',
          type: 'string',
          initialValue: 'Research'
        },
        {
          name: 'andText',
          title: 'And Text',
          type: 'string',
          initialValue: ' & '
        },
        {
          name: 'studyText',
          title: 'Study Text',
          type: 'string',
          initialValue: 'Study'
        },
        {
          name: 'centerText',
          title: 'Center Text',
          type: 'string',
          initialValue: ' center'
        }
      ]
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'buttons',
      title: 'Action Buttons',
      type: 'object',
      fields: [
        {
          name: 'button1',
          title: 'First Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'Button URL',
              type: 'string'
            },
            {
              name: 'isVisible',
              title: 'Show Button',
              type: 'boolean',
              initialValue: true
            }
          ]
        },
        {
          name: 'button2',
          title: 'Second Button',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Button Text',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'Button URL',
              type: 'string'
            },
            {
              name: 'isVisible',
              title: 'Show Button',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ]
    },
    {
      name: 'sidebarSections',
      title: 'Sidebar Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            },
            {
              name: 'icon',
              title: 'Icon Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: Rule => Rule.required()
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: Rule => Rule.required().min(1).max(4)
            },
            {
              name: 'isActive',
              title: 'Show Section',
              type: 'boolean',
              initialValue: true
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'icon',
              order: 'order'
            },
            prepare(selection) {
              const {title, subtitle, media, order} = selection
              return {
                title: `${order}. ${title}`,
                subtitle: subtitle,
                media: media
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1).max(4)
    },
    {
      name: 'portraitImages',
      title: 'Portrait Images',
      type: 'object',
      fields: [
        {
          name: 'mainPortrait',
          title: 'Main Portrait Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'altText',
          title: 'Alt Text for Images',
          type: 'string',
          initialValue: 'Rahul Sankrityayan Portrait'
        },
        {
          name: 'showMultipleCopies',
          title: 'Show Multiple Copies',
          type: 'boolean',
          initialValue: true,
          description: 'Show the same image in all 4 portrait containers'
        }
      ]
    },
    {
      name: 'styling',
      title: 'Styling Options',
      type: 'object',
      fields: [
        {
          name: 'primaryColor',
          title: 'Primary Color (Research/Study text)',
          type: 'string',
          initialValue: '#FFB222'
        },
        {
          name: 'buttonColor',
          title: 'Button Background Color',
          type: 'string',
          initialValue: '#FFB222'
        },
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          initialValue: '#ffffff'
        },
        {
          name: 'textColor',
          title: 'Main Text Color',
          type: 'string',
          initialValue: '#000000'
        },
        {
          name: 'subtitleColor',
          title: 'Subtitle Color',
          type: 'string',
          initialValue: '#5C5C5C'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'mainHeading.line1',
      subtitle: 'subtitle',
      media: 'portraitImages.mainPortrait'
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: `Hero: ${title || 'No Title'}`,
        subtitle: subtitle || 'No Subtitle',
        media: media
      }
    }
  }
>>>>>>> 9a5ae860723a8f6075e71c4860d5ed84f07d3ab0
}