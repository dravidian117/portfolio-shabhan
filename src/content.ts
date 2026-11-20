/** Site content — edit here to update bio, photo, contact, and projects. */
export const site = {
  name: 'Shabhan',
  fullName: 'Shabhan Andrew George',
  githubHandle: 'dravidian117',
  tagline:
    'Digital content creator, UI/UX & graphic designer, and videographer crafting engaging visual stories.',
  bio: [
    'I design interfaces and visual systems with a focus on clarity, accessibility, and craft—spanning UI/UX coursework (including HCC), graphic design, and digital content for campus and freelance clients.',
    'At NMSU Alamogordo I help coordinate student events through marketing materials that stay creative and useful. Alongside that, I bring videography and editing experience (especially food & beverage) plus contributions across color-theory tooling, game art, ML training, and small app interfaces.',
  ],
  expertiseLabel: 'Area of expertise',
  expertise: 'UI/UX & graphic design · Digital content · Videography · 3D / game art',
  portrait: {
    src: '/portrait.png',
    alt: 'Portrait of Shabhan Andrew George in a blue denim shirt',
    caption: 'Shabhan Andrew George — digital content creator and designer.',
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
      id: 'hcc-color-theory',
      title: 'HCC — Color Theory App',
      role: 'Home page, navigation shell & UX principles',
      blurb:
        'Public HCC project: a Flet desktop app for exploring color theory. I shaped the Home experience and top navigation so tools stay discoverable while a persistent palette sidebar keeps context across Color Wheel, Upload, Sandbox, and Accessibility—applying progressive disclosure, clear wayfinding, and feedback for save/load flows.',
      tags: ['HCC', 'UI/UX', 'Flet'],
      href: 'https://github.com/angelml1/-Color_Theory_App',
      image: {
        src: '/projects/color-theory.svg',
        alt: 'Color Theory App home and navigation mock with color wheel and palette sidebar',
      },
    },
    {
      id: 'game-jam',
      title: 'DGD Game Jam — Group 1',
      role: 'Art contribution',
      blurb:
        'Course game jam at NMSU. I owned the art side—visual direction, assets, and polish that support the jam prototype—while collaborating with the team on a short production cycle.',
      tags: ['Game jam', 'Art', 'CS371'],
      href: 'https://github.com/NMSU-CS-CS371/dgd-game-jam-1-group-1',
      image: {
        src: '/projects/game-jam.svg',
        alt: 'Stylized game-jam art preview with character and landscape',
      },
    },
    {
      id: 'project-abd',
      title: 'project-abd',
      role: 'Machine learning training',
      blurb:
        'Team ML project for NMSU CSCI 4425/5425. I contributed to the training side—preparing runs, iterating on model training, and helping the pipeline move from experiment to usable results.',
      tags: ['ML', 'Training', 'Python'],
      href: 'https://github.com/NMSU-CSCI-4425-5425/project-abd',
      image: {
        src: '/projects/project-abd.svg',
        alt: 'Abstract neural network and training chart illustration',
      },
    },
    {
      id: 'headsynk',
      title: 'HeadSynk',
      role: 'App interface',
      blurb:
        'CS 153 wellness habit tracker (CustomTkinter). I worked on the small-app interface for mood, food, water, sleep, and journal check-ins—keeping panels readable and the daily flow easy to scan.',
      tags: ['UI', 'Python', 'CustomTkinter'],
      href: 'https://github.com/Smooken-Development/C-S-153-HeadSynk-Group-Project',
      image: {
        src: '/projects/headsynk.svg',
        alt: 'HeadSynk habit-tracker interface mock with sidebar and check-in panels',
      },
    },
  ],
} as const
