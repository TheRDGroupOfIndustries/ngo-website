

export default {
  name: 'publications',
  title: 'Publications',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description/Abstract',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'category',
      title: 'Publication Category',
      type: 'string',
      options: {
      list: [
  { title: 'लेख', value: 'article' },
  { title: 'शोध पत्र', value: 'research-paper' },
  { title: 'पुस्तक', value: 'book' },
  { title: 'सम्मेलन पत्र', value: 'conference-paper' },
  { title: 'जर्नल लेख', value: 'journal-article' },
  { title: 'कार्यशील पत्र', value: 'working-paper' },
  { title: 'रिपोर्ट', value: 'report' },
  { title: 'पुस्तक अध्याय', value: 'book-chapter' }
],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Author Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'affiliation',
              title: 'Affiliation',
              type: 'string'
            },
            {
              name: 'isPrimary',
              title: 'Primary Author',
              type: 'boolean',
              initialValue: false
            }
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'affiliation'
            }
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'journal',
      title: 'Journal/Conference Name',
      type: 'string',
      description: 'Name of journal, conference, or publisher'
    },
    {
      name: 'volume',
      title: 'Volume',
      type: 'string',
      description: 'Volume number (for journals)'
    },
    {
      name: 'issue',
      title: 'Issue',
      type: 'string',
      description: 'Issue number (for journals)'
    },
    {
      name: 'pages',
      title: 'Pages',
      type: 'string',
      description: 'Page range (e.g., 123-145)'
    },
    {
      name: 'doi',
      title: 'DOI',
      type: 'string',
      description: 'Digital Object Identifier'
    },
    {
      name: 'url',
      title: 'Publication URL',
      type: 'url',
      description: 'Link to the publication'
    },
    {
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      description: 'Upload PDF file of the publication'
    },
    {
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }
          ]
        }
      ]
    },
    {
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      rows: 6,
      description: 'Detailed abstract of the publication'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'citations',
      title: 'Citation Count',
      type: 'number',
      description: 'Number of citations (if available)'
    },
    {
      name: 'featured',
      title: 'Featured Publication',
      type: 'boolean',
      description: 'Mark this publication as featured',
      initialValue: false
    },
    {
      name: 'openAccess',
      title: 'Open Access',
      type: 'boolean',
      description: 'Is this publication open access?',
      initialValue: false
    },
    {
      name: 'researchArea',
      title: 'Research Area',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Economics', value: 'economics' },
          { title: 'Public Policy', value: 'public-policy' },
          { title: 'Social Sciences', value: 'social-sciences' },
          { title: 'Political Science', value: 'political-science' },
          { title: 'Development Studies', value: 'development-studies' },
          { title: 'Environmental Policy', value: 'environmental-policy' },
          { title: 'Education', value: 'education' },
          { title: 'Health Policy', value: 'health-policy' },
          { title: 'Technology Policy', value: 'technology-policy' }
        ]
      }
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for SEO purposes'
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for SEO purposes'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category',
      date: 'publishedAt',
      authors: 'authors'
    },
    prepare(selection) {
      const { title, media, category, date, authors } = selection;
      const formattedDate = new Date(date).toLocaleDateString();
      const primaryAuthor = authors?.find(author => author.isPrimary) || authors?.[0];
      const authorName = primaryAuthor?.name || 'Unknown Author';
      
      return {
        title: title,
        subtitle: `${category?.toUpperCase()} - ${authorName} - ${formattedDate}`,
        media: media
      };
    }
  },
  orderings: [
    {
      title: 'Publication Date, New',
      name: 'publishedAtDesc',
      by: [
        { field: 'publishedAt', direction: 'desc' }
      ]
    },
    {
      title: 'Publication Date, Old',
      name: 'publishedAtAsc',
      by: [
        { field: 'publishedAt', direction: 'asc' }
      ]
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [
        { field: 'title', direction: 'asc' }
      ]
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'publishedAt', direction: 'desc' }
      ]
    }
  ]

  };