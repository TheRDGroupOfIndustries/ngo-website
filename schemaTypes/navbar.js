<<<<<<< HEAD
// sanity/schemas/navbar.js
export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Logo Text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'image',
          title: 'Logo Image (Optional)',
          type: 'image',
          options: {
            hotspot: true,
          },
        }
      ]
    },
    {
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Link Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'URL/Link',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'isActive',
              title: 'Is Active (Highlighted)',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: Rule => Rule.required().min(1)
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
              order: 'order'
            },
            prepare(selection) {
              const {title, subtitle, order} = selection
              return {
                title: `${order}. ${title}`,
                subtitle: subtitle
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
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
      name: 'styles',
      title: 'Navbar Styles',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          options: {
            list: [
              {title: 'Orange Light', value: '#FFB3384D'},
              {title: 'Orange Dark', value: '#FF8C00'},
              {title: 'White', value: '#FFFFFF'},
              {title: 'Transparent', value: 'transparent'}
          
            ]
          },
          initialValue: '#FFB338'
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          options: {
            list: [
              {title: 'Dark Gray', value: '#374151'},
              {title: 'White', value: '#FFFFFF'},
              {title: 'Black', value: '#000000'}
            ]
          },
          initialValue: '#374151'
        },
        {
          name: 'isSticky',
          title: 'Sticky Navbar',
          type: 'boolean',
          initialValue: false
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'logo.text',
      subtitle: 'navigationLinks.0.title'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Navbar: ${title || 'No Logo'}`,
        subtitle: `First Link: ${subtitle || 'No Links'}`
      }
    }
  }
=======
// sanity/schemas/navbar.js
export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Logo Text',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'image',
          title: 'Logo Image (Optional)',
          type: 'image',
          options: {
            hotspot: true,
          },
        }
      ]
    },
    {
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Link Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'url',
              title: 'URL/Link',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'isActive',
              title: 'Is Active (Highlighted)',
              type: 'boolean',
              initialValue: false
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: Rule => Rule.required().min(1)
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
              order: 'order'
            },
            prepare(selection) {
              const {title, subtitle, order} = selection
              return {
                title: `${order}. ${title}`,
                subtitle: subtitle
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
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
      name: 'styles',
      title: 'Navbar Styles',
      type: 'object',
      fields: [
        {
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'string',
          options: {
            list: [
              {title: 'Orange Light', value: '#FFB3384D'},
              {title: 'Orange Dark', value: '#FF8C00'},
              {title: 'White', value: '#FFFFFF'},
              {title: 'Transparent', value: 'transparent'}
          
            ]
          },
          initialValue: '#FFB338'
        },
        {
          name: 'textColor',
          title: 'Text Color',
          type: 'string',
          options: {
            list: [
              {title: 'Dark Gray', value: '#374151'},
              {title: 'White', value: '#FFFFFF'},
              {title: 'Black', value: '#000000'}
            ]
          },
          initialValue: '#374151'
        },
        {
          name: 'isSticky',
          title: 'Sticky Navbar',
          type: 'boolean',
          initialValue: false
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'logo.text',
      subtitle: 'navigationLinks.0.title'
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: `Navbar: ${title || 'No Logo'}`,
        subtitle: `First Link: ${subtitle || 'No Links'}`
      }
    }
  }
>>>>>>> 9a5ae860723a8f6075e71c4860d5ed84f07d3ab0
}