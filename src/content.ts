/** Site content — edit here to update bio, photo, contact, and project slots. */
export const site = {
  name: 'Shabhan',
  fullName: 'Shabhan Andrew George',
  githubHandle: 'dravidian117',
  tagline:
    'Digital content creator, UI/UX & graphic designer, and videographer crafting engaging visual stories.',
  bio: [
    'I have a year’s experience helping organize and coordinate student events at NMSU Alamogordo—primarily through marketing materials that stay creative, engaging, and useful for students discovering campus resources.',
    'As a freelance videographer with two years in industry, I work with people from all walks of life, with a focus on food-and-beverage videography, editing, and the creative process behind the frame. I also prototype menus, branding, and digital experiences that extend that aesthetic into UI/UX and graphic design.',
  ],
  expertiseLabel: 'Area of expertise',
  expertise: 'Digital content · UI/UX & graphic design · Videography · 3D animation',
  portrait: {
    src: '/portrait.svg',
    alt: 'Placeholder portrait illustration of Shabhan Andrew George',
    caption:
      'Placeholder illustration — not a photograph of Shabhan. Replace public/portrait.svg with a real photo when ready.',
  },
  contact: {
    email: 'shabhan@nmsu.edu',
    emailAlt: 'andrewgeorge8287@gmail.com',
    phone: '575-404-0412',
    location: 'Alamogordo, New Mexico',
    socials: [
      {
        label: 'GitHub',
        href: 'https://github.com/dravidian117',
        placeholder: false,
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/p/CMbp0MFl_QRz7MGhHzj9XGpHKcJMSsuRtHHYCs0/',
        placeholder: false,
      },
      {
        label: 'LinkedIn',
        href: '#',
        placeholder: true,
      },
    ],
  },
  resume: {
    href: '/resume.pdf',
    label: 'Resume / CV',
  },
  projects: [
    {
      id: '1',
      title: 'Logo animation & brand motion',
      blurb:
        'Basic SVG animation for minimalist branding across website and app design. Replace or expand with a case study when ready.',
      tags: ['Motion', 'Branding'],
      href: 'https://www.instagram.com/p/CMbp0MFl_QRz7MGhHzj9XGpHKcJMSsuRtHHYCs0/',
    },
    {
      id: '2',
      title: 'Menu website mock redesign',
      blurb:
        'Prototypes of online menus and branding ideas for popups and venues, informed by guerrilla interviews with floor staff. Template slot — flesh out details as needed.',
      tags: ['UI/UX', 'Research'],
      href: '#',
    },
    {
      id: '3',
      title: 'Brand identity & social ads',
      blurb:
        'Logo, color palette, business definition, namecard design, and social media ads. Placeholder project slot for portfolio write-ups.',
      tags: ['Identity', 'Social'],
      href: '#',
    },
  ],
} as const
