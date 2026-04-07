// ─── Project Data ────────────────────────────────────────────────────────────
// This is the single source of truth for every project.
// It feeds both the homepage grid AND the individual project pages.
// Add, remove, or reorder entries here — everything updates automatically.

const ICON_3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 7l9 5 9-5-9-5Z"/><path d="M3 7v10l9 5 9-5V7"/><path d="M12 12v10"/></svg>`;
const ICON_VR = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-vr-fill" viewBox="0 0 16 16">
  <path d="M9.673 5.933v1.938h1.033c.66 0 1.068-.316 1.068-.95 0-.64-.422-.988-1.05-.988z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.937 7 1.99-5.999H6.61L5.277 9.708H5.22L3.875 5.001H2.5L4.508 11zM8.5 5.001V11h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9H8.5z"/>
</svg>`;
const ICON_MOBILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>`;
const ICON_AR = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-ar-fill" viewBox="0 0 16 16"> <path d="m6.031 8.574-.734-2.426h-.052L4.51 8.574h1.52zm3.642-2.641v1.938h1.033c.66 0 1.068-.316 1.068-.95 0-.64-.422-.988-1.05-.988z"/> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.265 5.458h2.004L6.739 11H8L5.996 5.001H4.607L2.595 11h1.2zM8.5 5v6h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9z"/> </svg>';
const ICON_DESKTOP = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
</svg>`;
const ICON_WEB = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>`;
const ICON_GAME = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-controller" viewBox="0 0 16 16">
  <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
  <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
</svg>`;

export interface ProjectImage {
  /** Type of media — defaults to 'image' */
  type?:      'image' | 'video-loop' | 'vimeo' | 'youtube';
  /** Image path (type: 'image') */
  src?:       string;
  /** Accessible description */
  alt:        string;
  /** 'full' spans the whole width, 'half' sits in a 2-col grid */
  size?:      'full' | 'half';

  // VideoLoop fields (type: 'video-loop')
  /** Path to .webm source */
  webm?:      string;
  /** Path to .mp4 source */
  mp4?:       string;
  /** Poster image shown before the video plays */
  poster?:    string;

  // VimeoEmbed fields (type: 'vimeo')
  /** Vimeo numeric video ID */
  vimeoId?:   string;
  /** Human-readable title for accessibility */
  title?:     string;
  /** Custom thumbnail shown before the user clicks play */
  thumbnail?: string;

  // YoutubeEmbed fields (type: 'youtube')
  /** YouTube video ID (from youtube.com/watch?v=XXXX) */
  youtubeId?: string;
}

export interface Project {
  /** Used as the URL slug: /projects/[slug] */
  slug:        string;
  title:       string;
  category:    string;
  /** Short description for the homepage grid card hover */
  tagline:     string;
  /** Cover image (used in the grid and as the hero on the project page) */
  cover:       string;
  coverAlt:    string;
  /** Placeholder gradient shown when cover image is missing */
  placeholder?: string;
  /** Optional external link (e.g. live site) */
  href?:       string;
  /** SVG markup for the card's lower-right icon */
  icon?:       string;
  /** Main body text — supports simple HTML like <em> and <br> */
  description: string;
  /** Optional second paragraph */
  descriptionExtra?: string;
  /** Gallery images shown below the description */
  gallery?:    ProjectImage[];
  /** Key facts shown in the sidebar */
  details?:    { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug:        'Space Spree',
    title:       'Space Spree',
    category:    'Videogame · Mobile',
    tagline:     'A fast-paced mobile shooter set in space',
    cover:       '/images/projects/spacespree/6.jpg',
    coverAlt:    'A fast-paced mobile shooter set in space',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'A fast-paced mobile shooter where strategy meets survival. In Space Spree, players battle waves of aliens, choosing targets based on risk and reward to unlock upgrades and maximize their score. Quick decisions, evolving power-ups, and endless gameplay create a competitive experience built for replayability and leaderboard progression.',
    gallery: [
      { src: '/images/projects/spacespree/5.jpg', alt: 'Side View', size: 'half' },
      { src: '/images/projects/spacespree/4.jpg', alt: 'The mission', size: 'half' },
      { type: 'youtube',  youtubeId: 'gp-7DMwtPag',  title: 'Space Spree Trailer',  thumbnail: '/images/projects/spacespree/1.jpg', alt: 'Video description', size: 'full' },
      { type: 'youtube',  youtubeId: 'rTDezjz6XMs',  title: 'Making of',  thumbnail: '/images/projects/spacespree/3.jpg', alt: 'Video description', size: 'full' },
    ],
    details: [
      { label: 'Destination',    value: 'iOS, Android' },
      { label: 'Technologies',    value: 'Unity3D, Blender, AWS, Fly.io, Express, Prisma, SQLite' }
    ],
    href: 'https://play.google.com/store/apps/details?id=com.TNTC.SpaceSpree'
  },
  {
    slug:        'Agile Configurator',
    title:       'Agile Configurator',
    category:    'Web · Desktop · Configurator',
    tagline:     'A real-time platform for designing, simulating, and monitoring parcel sorting systems.',
    cover:       '/images/projects/agile/4.webp',
    coverAlt:    '',
    placeholder: 'linear-gradient(135deg, #1e2820 0%, #2e4830 100%)',
    icon: ICON_WEB,
    description: 'A real-time platform for designing, simulating, and monitoring parcel sorting systems. Agile Configurator enables users to build modular plant layouts via a desktop app, defining routes, conveyors, and operational logic with full control. Through a connected web interface, each configuration can be linked to live data — allowing real parcels to be visualized in real time within the simulation. Built-in monitoring tools surface errors and machine states instantly, turning the platform into both a design tool and an operational dashboard.',
    gallery: [
      { thumbnail: '/images/projects/agile/3.webp', alt: 'Live play 1',   size: 'half', type: 'vimeo', vimeoId: '1179903224' },
      { thumbnail: '/images/projects/agile/1.webp', alt: 'Live play 2',   size: 'half', type: 'vimeo', vimeoId: '1179903280' },
      { thumbnail: '/images/projects/agile/2.webp', alt: 'Live play 3',   size: 'half', type: 'vimeo', vimeoId: '1179903344' },
      { src: '/images/projects/agile/2.jpg', alt: 'Desktop Configurator', size: 'half' },
      { src: '/images/projects/agile/3.jpg', alt: 'Web View', size: 'half' },
      { src: '/images/projects/agile/4.webp', alt: 'Line with Baia', size: 'half' },
      { src: '/images/projects/agile/5.jpg', alt: 'Eletric Cabin', size: 'half' }
    ],
    details: [
      { label: 'Client',   value: 'Agile Vision'    },
      { label: 'Destination',    value: 'Desktop, WEB' },
      { label: 'Technologies',    value: 'Unity3D, Blender, Substance Painter' }
    ],
    href: '',
  },
  {
    slug:        'ActiveAR',
    title:       'Active AR',
    category:    'Mobile · AR',
    tagline:     'An AR Android/iOS mobile experience that transforms ceramic tiles into interactive storytelling surfaces',
    cover:       '/images/projects/activeAR/4.jpg',
    coverAlt:    '',
    placeholder: 'linear-gradient(135deg, #1e2832 0%, #2e4055 100%)',
    icon: ICON_AR,
    description: 'An AR mobile experience that transforms ceramic tiles into interactive storytelling surfaces. By simply framing a marker, users trigger immersive scenes that reveal each tile’s key properties — self-cleaning, anti-pollution, antibacterial, and anti-odour — through engaging visual metaphors.',
    descriptionExtra: 'Built with Unity AR Foundation, ARCore, and ARKit.',
    gallery: [
      { thumbnail: '/images/projects/activeAR/6.jpg', alt: 'Active AR live action',   size: 'full', type: 'vimeo', vimeoId: '1179146385' },
      { src: '/images/projects/activeAR/2.jpg', alt: 'Behind the scene 1', size: 'half' },
      { src: '/images/projects/activeAR/3.jpg', alt: 'Behind the scene 2', size: 'half' },
      { src: '/images/projects/activeAR/7.jpg', alt: 'Behind the scene 3', size: 'half' },
      { src: '/images/projects/activeAR/5.jpg', alt: 'Behind the scene 4', size: 'half' },
    ],
    details: [
      { label: 'Client',   value: 'Publics, Discromie, IRIS ceramica group'    },
      { label: 'Destination',    value: 'AR, Artistic' },
      { label: 'Technologies',    value: 'Unity3D, Blender, Substance Painter' }
    ],
  },
  {
    slug:        'Golinelli Live',
    title:       'Golinelli Live',
    category:    'VR · Multiplayer',
    tagline:     'A VR platform for immersive education in life sciences and manufacturing',
    cover:       '/images/projects/golive/4.jpg',
    coverAlt:    'A VR platform for immersive education in life sciences and manufacturing',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_VR,
    description: 'A VR platform for immersive education in life sciences and manufacturing. Golinelli Live enables teachers to host and orchestrate real-time, multiplayer learning experiences, guiding students through interactive lab scenarios in VR. Through a dedicated desktop interface, instructors can monitor participants, access their point of view, and control the flow of the session. Students join from VR, fully immersed in a laboratory environment. A companion web platform allows educators to design custom experiences using modular building blocks — defining steps, tools, and learning goals with flexibility and control.',
    gallery: [
      { thumbnail: '/images/projects/golive/5.jpg', alt: 'DNA Fingerprinting',   size: 'full', type: 'vimeo', vimeoId: '1179503807' },
      { src: '/images/projects/golive/1.jpg', alt: 'Classroom', size: 'half' },
      { src: '/images/projects/golive/4.jpg', alt: 'Laboratory', size: 'half' },
    ],
    details: [
      { label: 'Client',   value: 'Fondazione Golinelli'    },
      { label: 'Destination',    value: 'Meta Quest 2, 3' },
      { label: 'Technologies',    value: 'Unity3D, Photon,  Blender' }
    ],
    href: 'https://golinelli.live/',
  },
  {
    slug:        'Golinelli Live - Ceramic Training',
    title:       'Golinelli Live - Ceramic Training',
    category:    'VR · Training',
    tagline:     'A VR training module for ceramic manufacturing.',
    cover:       '/images/projects/acimac/1.jpg',
    coverAlt:    'A VR training module for ceramic manufacturing',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_VR,
    description: 'A VR training module for ceramic manufacturing, built on the Golinelli Live framework. The experience guides users through the process of firing ceramic slabs, detailing each production phase and the associated parameters such as temperature and machine settings. Through interactive simulation, users can explore common errors and system failures, gaining practical understanding without the risks of a real production environment.',
    gallery: [
      { thumbnail: '/images/projects/acimac/3.jpg', alt: 'Laboratory Fingerprint',   size: 'full', type: 'vimeo', vimeoId: '1179514079' },
      { src: '/images/projects/acimac/1.jpg', alt: 'Unity view', size: 'half' },
      { src: '/images/projects/acimac/2.jpg', alt: 'Unity view', size: 'half' },

    ],
    details: [
      { label: 'Client',   value: 'Fondazione Golinelli'    },
      { label: 'Destination',    value: 'Meta Quest 2, 3' },
      { label: 'Technologies',    value: 'Unity3D' }
    ],
    href: 'https://golinelli.live/',
  },
  {
    slug:        'Salewa Showcase',
    title:       'Salewa Showcase',
    category:    'VR · Marketing',
    tagline:     'A VR product showcase set in a dynamic mountain environment.',
    cover:       '/images/projects/salewa/1.webp',
    coverAlt:    'A VR product showcase set in a dynamic mountain environment.',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_VR,
    description: 'A VR product showcase set in a dynamic mountain environment. Users experience Salewa’s tent across a full day-night cycle, observing it under changing light and conditions. Built for quick, frictionless sessions in-store and at trade fairs, the experience is optimized for first-time users — minimizing motion sickness and using hand tracking to deliver an immediate, engaging interaction.',
    gallery: [
      { src: '/images/projects/salewa/1.jpg', alt: 'Night scene', size: 'half' },
      { src: '/images/projects/salewa/2.webp', alt: 'Day scene', size: 'half' },
      { thumbnail: '/images/projects/salewa/3.jpg', alt: 'Live experience',   size: 'full', type: 'vimeo', vimeoId: '1179520988' },
    ],
    details: [
      { label: 'Client',   value: 'Coral Climb, Salewa'    },
      { label: 'Destination',    value: 'Oculus Quest 2, 3' },
      { label: 'Technologies',    value: 'Unity, Blender' }
    ],
    href: '',
  },
  {
    slug:        'Guercino in piazza',
    title:       'Guercino in piazza',
    category:    'VR · Art Installation',
    tagline:     'A mixed reality experience for Meta Quest 3 set in the heart of Cento, Guercino’s hometown.',
    cover:       '/images/projects/guercino/1.jpg',
    coverAlt:    '',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_VR,
    description: 'A mixed reality experience for Meta Quest 3 set in the heart of Cento, Guercino’s hometown. Through passthrough, users discover the artist’s works placed directly within the real environment. With hand tracking, a hidden interaction unlocks a secret scene — transporting users from the physical piazza into a vast, cosmic dimension for a striking “wow” moment.',
    gallery: [
      { thumbnail: '/images/projects/guercino/4.jpg', alt: 'Live experience',   size: 'full', type: 'vimeo', vimeoId: '1179216117' },
      { src: '/images/projects/guercino/2.jpg', alt: 'Hand tracking', size: 'half' },
      { src: '/images/projects/guercino/3.jpg', alt: 'Hidden scene: Over the sun!', size: 'half' },
      { src: '/images/projects/guercino/5.jpg', alt: 'Having fun!', size: 'half' },
    ],
    details: [
      { label: 'Destination',    value: 'Meta Quest 3' },
      { label: 'Technologies',    value: 'Unity3D, Blender, Substance Painter' }
    ],
  },
  {
    slug:        'Bicentenario Renazzo',
    title:       'Bicentenario Renazzo',
    category:    'VR · Art Installation',
    tagline:     'Step into the Emilian countryside of the 1800s and witness the fall of the Renazzo meteorite.',
    cover:       '/images/projects/bicentenario/5.jpg',
    coverAlt:    '',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_VR,
    description: 'Step into the Emilian countryside of the 1800s and witness the fall of the Renazzo meteorite. In the stillness of a cold night, a sudden light cuts through the sky — followed by three thunderous explosions that shatter the silence. This VR experience allows users to relive the event as it unfolded, combining immersive storytelling with educational insight to bring history back to life.',
    descriptionExtra: 'Alongside the interactive experience, a documentary video was produced for the Guercino Museum in Cento — extending the project into a cinematic format designed for a broader audience and on-site exhibition.',
    gallery: [
      { src: '/images/projects/bicentenario/1.jpg', alt: 'Environment shot 1', size: 'half' },
      { src: '/images/projects/bicentenario/2.jpg', alt: 'Environment shot 2', size: 'half' },
      { src: '/images/projects/bicentenario/3.jpg', alt: 'Environment shot 3', size: 'half' },
      { src: '/images/projects/bicentenario/1.webp', alt: 'Environment shot 4', size: 'half' },
      { src: '/images/projects/bicentenario/2.webp', alt: 'Having fun!', size: 'half' },
      { src: '/images/projects/bicentenario/5.jpg', alt: 'Exposed beside the real meteorite', size: 'half' },
    ],
    details: [
      { label: 'Destination',    value: 'Meta Quest 3' },
      { label: 'Technologies',    value: 'Unity3D, Blender, Substance Painter' }
    ],
  },
  {
    slug:        'La Casa AR',
    title:       'La Casa AR',
    category:    'AR · Art Installation',
    tagline:     'A permanent AR installation inside Bologna’s Sala Borsa.',
    cover:       '/images/projects/lacasa/1.webp',
    coverAlt:    'A permanent AR installation inside Bologna’s Sala Borsa',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_AR,
    description: 'A permanent AR installation inside Bologna’s Sala Borsa, blending physical and digital storytelling. The experience synchronizes with video mapping (@by apparatieffimeri) to augment a scale model of the city, revealing an interactive narrative layered directly onto the urban landscape. A companion web app quiz extends the experience, engaging users beyond the installation.',
    gallery: [
      { thumbnail: '/images/projects/lacasa/1.webp', alt: 'Live experience',   size: 'full', type: 'vimeo', vimeoId: '1179279081' },
      { src: '/images/projects/lacasa/2.webp', alt: 'Editor mapping', size: 'half' },
      { src: '/images/projects/lacasa/3.webp', alt: 'Web app inside totems', size: 'half' },
      { src: '/images/projects/lacasa/4.webp', alt: 'Tablets augmenting the wooden structure', size: 'half' },
      { src: '/images/projects/lacasa/5.webp', alt: 'In action', size: 'half' },
      { src: '/images/projects/lacasa/6.webp', alt: 'Alignment...', size: 'half' },
    ],
    details: [
      { label: 'Client',   value: 'Fondazione Innovazione Urbana'    },
      { label: 'Destination',    value: 'iOS / Android, web' },
      { label: 'Technologies',    value: 'Unity3D, Blender' }
    ],
  },
  {
    slug:        'U.MANO & ARTEFIERA',
    title:       'U.MANO & ARTEFIERA',
    category:    'VR · AR · Experimental Art Installation',
    tagline:     'An experimental art exhibition.',
    cover:       '/images/projects/umano/3.jpg',
    coverAlt:    'An experimental art exhibition.',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_AR,
    description: 'An experimental art exhibition exploring the past, present, and future of the human hand. For U.MANO, we developed an AR application that allows users to create augmented artworks, transforming the hand into a tool for digital expression. The project evolved into a multi-sensory installation showcased at Arte Fiera, blending VR, AR, sonification, and video mapping into a unified immersive experience.',
    gallery: [
      { thumbnail: '/images/projects/umano/3.jpg', alt: 'U.MANO EXHIBITION',   size: 'half', type: 'vimeo', vimeoId: '1179267728' },
      { thumbnail: '/images/projects/umano/4.webp', alt: 'ARTEFIERA',   size: 'half', type: 'vimeo', vimeoId: '1179268304' },
      { src: '/images/projects/umano/1.webp', alt: 'App menus', size: 'half' },
      // { src: '/images/projects/umano/2.png', alt: 'Art Exhibition', size: 'half' },
      { src: '/images/projects/umano/5.jpg', alt: 'ArteFiera', size: 'half' }
    ],
    details: [
      { label: 'Year',     value: '2020'               },
      { label: 'Client',   value: 'Fondazione Golinelli'    },
      { label: 'Destination',    value: 'iOS/Android, Meta Quest' }
    ],
  },
  {
    slug:        'BI-REX',
    title:       'BI-REX Virtual Experience',
    category:    'VR · Gamification',
    tagline:     'Discover the secret of the competence center',
    cover:       '/images/projects/birex/4.jpg',
    coverAlt:    'BI-REX Virtual Experience cover',
    placeholder: 'linear-gradient(135deg, #3d2e20 0%, #6b4a2e 100%)',
    icon: ICON_VR,
    description: 'Step into an immersive virtual experience at the BI-REX Competence Center in Bologna. Guided by Robo Tino, users engage in three interactive mini-games — eliminating corrupted data, assembling robotic systems, and navigating a drone through obstacles. A series of playful yet meaningful interactions designed to translate big data, automation, and industrial processes into clear, memorable experiences.',
    descriptionExtra: '',
    gallery: [
      { thumbnail: '/images/projects/birex/2.jpg', alt: 'BI-REX gameplay',   size: 'full', type: 'vimeo', vimeoId: '1179008152'},
      { src: '/images/projects/birex/1.jpg', alt: 'Competence Center scene', size: 'half' },
      { thumbnail: '/images/projects/birex/3.jpg', alt: 'MIR substance painter',   size: 'half', type: 'vimeo', vimeoId: '1179014699' },
    ],
    details: [
      { label: 'Year',     value: '2024'               },
      { label: 'Client',   value: 'BI-REX Competence Center, Bologna'    },
      { label: 'Destination',    value: 'VR, Gamification' },
      { label: 'Technologies',    value: 'Unity3D, Blender, Substance Painter' }
    ],
    href: '',
  },
  {
    slug:        'RoboTino',
    title:       'Robo Tino - Character Design for VR',
    category:    'Character Design · VR',
    tagline:     'An assistant for a virtual reality experience',
    cover:       '/images/projects/robotino/4.webp',
    coverAlt:    'Robo Tino waves',
    placeholder: 'linear-gradient(135deg, #3d2e20 0%, #6b4a2e 100%)',
    icon: ICON_3D,
    description: 'Meet Robo Tino, your guide inside the BI-REX Competence Center. An expressive, floating companion that communicates, assists, and seamlessly leads users through an immersive VR experience',
    descriptionExtra: '',
    gallery: [
      { thumbnail: '/images/projects/robotino/2.webp', alt: 'Robo Tino in action',   size: 'full', type: 'vimeo', vimeoId: '1178780462'},
      { src: '/images/projects/robotino/1.jpg', alt: 'Pencil Sketch', size: 'half' },
      { src: '/images/projects/robotino/3.webp', alt: 'Model wireframe',  size: 'half' },
    ],
    details: [
      { label: 'Year',     value: '2024'               },
      { label: 'Client',   value: 'BI-REX Competence Center, Bologna'    },
      { label: 'Destination',    value: 'VR, Gamification' },
      { label: 'Technologies',    value: 'Unity3D, Blender, Substance Painter' }
    ],
    href: '',
  },
  
  {
    slug:        'Enchanted Forest - Viverse',
    title:       'Enchanted Forest - Viverse',
    category:    'Videogame · Web',
    tagline:     'Step into a magical forest where mystery and music come to life.',
    cover:       '/images/projects/viverse/3.webp',
    coverAlt:    'Step into a magical forest where mystery and music come to life.',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'A social, web-based world set in a magical forest. Created for Viverse using PlayCanvas, the experience combines exploration, light quests, and interactive elements in a calm, moonlit environment. Designed as a shared space, it offers users a place to discover, interact, and simply hang out together in an immersive setting.',
    gallery: [
      { thumbnail: '/images/projects/viverse/3.jpg', alt: 'Gameplay',   size: 'full', type: 'vimeo', vimeoId: '1179707354' },
      { src: '/images/projects/viverse/5.jpg', alt: 'Exploring around 1', size: 'half' },
      { src: '/images/projects/viverse/6.jpg', alt: 'Exploring around 2', size: 'half' },
      { src: '/images/projects/viverse/4.webp', alt: 'WoodyLeaf Creature', size: 'half' },
      { src: '/images/projects/viverse/2.webp', alt: 'Top View', size: 'half' },
    ],
    details: [
      { label: 'Client',   value: 'Viverse'    },
      { label: 'Destination',    value: 'Web' },
      { label: 'Technologies',    value: 'Viverse SDK, Playcanvas, Blender, Substance Painter' }
    ],
    href: 'https://www.viverse.com/hp3X3BA'
  },
  {
    slug:        'Politico Poetico Il parlamento',
    title:       'Politico Poetico Il parlamento',
    category:    'Web 3D',
    tagline:     'A 3D web platform that gives young people a voice in shaping sustainable futures.',
    cover:       '/images/projects/politicopoetico/1.webp',
    coverAlt:    'A 3D web platform that gives young people a voice in shaping sustainable futures.',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_WEB,
    description: 'A 3D web platform that gives young people a voice in shaping sustainable futures. Set within a digital Bologna, each participant appears as a personalized icon — inviting users to listen to their ideas, stories, and proposed actions. An interactive way to turn individual contributions into a shared vision for change.',
    gallery: [
      { thumbnail: '/images/projects/politicopoetico/3.jpg', alt: 'Live experience',   size: 'full', type: 'vimeo', vimeoId: '1179374061' },
      { src: '/images/projects/politicopoetico/1.webp', alt: 'The city', size: 'half' },
      { src: '/images/projects/politicopoetico/2.jpg', alt: 'The globe', size: 'half' },
    ],
    details: [
      { label: 'Client',   value: 'Politico Poetico'    },
      { label: 'Destination',    value: 'Web 3D' },
      { label: 'Technologies',    value: 'Three JS, Blender' }
    ],
    href: 'https://politicopoetico.org/monologhi/',
  },
  {
    slug:        'Comune di Peccioli',
    title:       'Comune di Peccioli',
    category:    'Web 3D',
    tagline:     'A 3D web experience to explore Peccioli through a playful journey.',
    cover:       '/images/projects/peccioli/1.jpg',
    coverAlt:    'A 3D web experience to explore Peccioli through a playful journey.',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_WEB,
    description: 'A 3D web experience to explore Peccioli through a playful journey. Users drive a small Ape vehicle across a stylized landscape, discovering local non-profit organizations and their stories along the way. A simple, engaging way to connect people with the community and its initiatives.',
    gallery: [
      { src: '/images/projects/peccioli/3.webp', alt: 'Association', size: 'half' },
      { src: '/images/projects/peccioli/1.jpg', alt: 'Map view', size: 'half' },
      { src: '/images/projects/peccioli/2.webp', alt: 'Ape car', size: 'half' },
      { src: '/images/projects/peccioli/4.webp', alt: 'Blender', size: 'half' },
    ],
    details: [
      { label: 'Client',   value: 'Comune di Peccioli'    },
      { label: 'Destination',    value: 'Web 3D' },
      { label: 'Technologies',    value: 'Three JS, Blender' }
    ],
    href: '',
  },
  {
    slug:        'The procedural Building System behind Expedition 33',
    title:       'The procedural Building System behind Expedition 33',
    category:    'Videogame · Tool',
    tagline:     'A procedural city-building tool for Unity',
    cover:       '/images/projects/expedition/1.jpg',
    coverAlt:    'A procedural city-building tool for Unity',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'We recreated a procedural building generation tool in Unity, inspired by the modular architecture of Expedition 33: Clear Obscure. Starting from artist-drawn footprints, we generated building outlines, sides, corners, and rules for repeating facade elements like windows, doors, columns, balconies, terraces, and roofs. Our system uses a combination of procedural logic and pre-modeled assets: each building element is placed according to rules for spacing, repetition, and variation. Special care was taken for the roof structure and upper floors, adapting outline shrinking and segment-based techniques to match the reference style. The final mesh can be combined and exported as a single FBX, keeping material assignments intact. This project allowed us to explore modular workflows, procedural control, and export-ready pipelines entirely inside Unity, while experimenting with ways to alter models after placement and maintain consistent style across large cityscapes.',
    gallery: [
      { type: 'youtube',  youtubeId: 'hm5UIC0C4mQ',  title: 'Making of',  thumbnail: '/images/projects/expedition/2.jpg', alt: 'Making of', size: 'full' },
      { thumbnail: '/images/projects/expedition/1.webp', alt: 'Showcase 1',   size: 'half', type: 'vimeo', vimeoId: '1179643105'},
      { thumbnail: '/images/projects/expedition/2.webp', alt: 'Showcase 2',   size: 'half', type: 'vimeo', vimeoId: '1179643136'},
      { thumbnail: '/images/projects/expedition/3.webp', alt: 'Showcase 3',   size: 'half', type: 'vimeo', vimeoId: '1179643044'},
      { thumbnail: '/images/projects/expedition/4.webp', alt: 'Showcase 4',   size: 'half', type: 'vimeo', vimeoId: '1179643077'},
    ],
    details: [
      { label: 'Destination',    value: 'Patreon' },
      { label: 'Technologies',    value: 'Unity3D, Blender' }
    ],
    href: 'https://www.patreon.com/posts/procedural-tool-148203435?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link'
  },
  {
    slug:        'Merging Worlds like Split Fiction',
    title:       'Merging Worlds like Split Fiction',
    category:    'Videogame · Tool',
    tagline:     'Multi-world visual effects',
    cover:       '/images/projects/splitfiction/4.webp',
    coverAlt:    'Multi-world visual effects',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'Recreation of the multi-world split mechanic from SplitFiction. The goal of this project was to explore how multiple 3D scenes can coexist on the same screen space, with dynamic masks and shapes controlling visibility and interactions. Using the stencil buffer and custom shaders in Unity, each world is isolated while maintaining consistent player collisions and logic. This project allowed us to experiment with advanced rendering techniques and dynamic scene management in real-time.',
    gallery: [
      { src: '/images/projects/splitfiction/3.webp', alt: 'Custom shapes', size: 'half' },
      { thumbnail: '/images/projects/splitfiction/1.webp', alt: 'Gameplay',   size: 'half', type: 'vimeo', vimeoId: '1179646806'},
      { thumbnail: '/images/projects/splitfiction/2.webp', type: 'youtube',  youtubeId: 'PgCiQHmZFBE',  title: 'Making of', alt: 'Making of', size: 'full' },
    ],
    details: [
      { label: 'Destination',    value: 'Patreon' },
      { label: 'Technologies',    value: 'Unity3D, Blender' }
    ],
    href: 'https://www.patreon.com/posts/splitfiction-134416817'
  },
  {
    slug:        'Hold Person spell - VFX Breakdown',
    title:       'Hold Person spell - VFX Breakdown',
    category:    'Videogame · VFX',
    tagline:     'A real-time VFX breakdown inspired by the “Hold Person” spell.',
    cover:       '/images/projects/baldurs/1.jpg',
    coverAlt:    'A real-time VFX breakdown inspired by the “Hold Person” spell.',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'Real-time VFX recreation of the Hold Person spell from Baldur’s Gate 3. The goal of this project was to break down a complex, layered effect and rebuild it in a real-time environment, with a strong focus on readability, timing, and overall gameplay clarity. Particular attention was given to how each element contributes to communicating the spell’s behavior and impact to the player. During the process, we also had the opportunity to talk with the original VFX artist behind the effect, gaining additional insight into production workflows and design decisions.',
    gallery: [
      { src: '/images/projects/baldurs/3.webp', alt: 'Custom shapes', size: 'half' },
      { thumbnail: '/images/projects/baldurs/1.webp', alt: 'Gameplay',   size: 'half', type: 'vimeo', vimeoId: '1179714014'},
      { thumbnail: '/images/projects/baldurs/2.jpg', type: 'youtube',  youtubeId: 'KkwqVooP3Ew',  title: 'Making of', alt: 'Making of', size: 'full' },
    ],
    details: [
      { label: 'Destination',    value: 'Youtube' },
      { label: 'Technologies',    value: 'Unity3D, Blender' }
    ],
    href: ''
  }, 
  {
    slug:        'Painting Effect - Splatoon',
    title:       'Painting Effect - Splatoon',
    category:    'Videogame · Tool',
    tagline:     '',
    cover:       '/images/projects/splatoon/1.jpg',
    coverAlt:    'Real-time surface painting system in Unity',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'Real-time surface painting system in Unity, designed to support gameplay-driven interaction and environmental feedback. The project focuses on UV-space painting for consistency and control, with a modular architecture that supports multiple input sources such as particles and collisions. The system was later used in collaboration with Mix and Jam, where it was integrated to recreate a Splatoon-like gameplay mechanic.',
    gallery: [
      { thumbnail: '/images/projects/splatoon/1.webp', type: 'youtube',  youtubeId: 'YUWfHX_ZNCw',  title: 'Making of', alt: 'Making of', size: 'half' },
      { thumbnail: '/images/projects/splatoon/2.webp', alt: 'Gameplay',   size: 'half', type: 'vimeo', vimeoId: '1179894273'},
    ],
    details: [
      { label: 'Destination',    value: 'Youtube' },
      { label: 'Technologies',    value: 'Unity3D, Blender' }
    ],
    href: ''
  },
  {
    slug:        'World cutting - Viewfinder',
    title:       'World cutting - Viewfinder',
    category:    'Videogame · Mechanic',
    tagline:     'A recreation of a world-cutting mechanic inspired by Viewfinder.',
    cover:       '/images/projects/viewfinder/4.webp',
    coverAlt:    'A recreation of a world-cutting mechanic inspired by Viewfinder.',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'Real-time recreation of the picture-based environment manipulation mechanic from Viewfinder. The goal of this project was to explore how a player can capture a portion of a 3D world and reposition it dynamically, preserving both geometry and gameplay interactions. Using Unity, we implemented real-time mesh slicing, frustum-based object selection, and camera-controlled placement, while maintaining consistent collisions and visual fidelity. Particular focus was given to handling dynamic meshes efficiently and recreating the interaction between the captured elements and the surrounding environment.',
    gallery: [
      { thumbnail: '/images/projects/viewfinder/2.jpg', type: 'youtube',  youtubeId: 'rdExK08zYBI',  title: 'Making of', alt: 'Making of', size: 'half' },
      { thumbnail: '/images/projects/viewfinder/1.webp', alt: 'Gameplay',   size: 'half', type: 'vimeo', vimeoId: '1179717078'},
      { thumbnail: '/images/projects/viewfinder/2.webp', alt: 'Gameplay',   size: 'half', type: 'vimeo', vimeoId: '1179717057'},
      { thumbnail: '/images/projects/viewfinder/3.webp', alt: 'Gameplay',   size: 'half', type: 'vimeo', vimeoId: '1179717100'},
    ],
    details: [
      { label: 'Destination',    value: 'Youtube' },
      { label: 'Technologies',    value: 'Unity3D, Blender' }
    ],
    href: 'https://github.com/ToughNutToCrack/ViewFinder'
  },
  {
    slug:        'Procedural Ivy - Niantic Game Jam',
    title:       'Procedural Ivy - Niantic Game Jam',
    category:    'Videogame · Mobile · AR',
    tagline:     'A procedural ivy effect that adapts to real-world surfaces',
    cover:       '/images/projects/procivy/1.webp',
    coverAlt:    'A procedural ivy effect that adapts to real-world surfaces',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'During the Lightship Global Jam organized by Niantic and Playcraft, we had the chance to experiment with Niantic’s AR framework by creating a procedural ivy effect that adapts to real-world surfaces. In Unity, we generated ivy branches using a recursive algorithm to define key points and build the mesh, then drove the growth with a custom shader. Leaves and flowers were added along the branches for realism, while a mesh-combining system helped optimize performance. Although the project took place in an AR context, the focus here is on the procedural ivy system itself, showcasing how procedural techniques can create complex, dynamic content in Unity.',
    gallery: [
      { thumbnail: '/images/projects/procivy/1.webp', type: 'youtube',  youtubeId: 'n5hQ6yMQIkI',  title: 'Making of', alt: 'Making of', size: 'half' },
      { thumbnail: '/images/projects/procivy/2.webp', alt: 'Test scene',   size: 'half', type: 'vimeo', vimeoId: '1179897495'},
    ],
    details: [
      { label: 'Client',   value: 'Niantic, Playcraft'    },
      { label: 'Destination',    value: 'Game Jam' },
      { label: 'Technologies',    value: 'Unity3D, Blender, Niantic Lightship SDK' }
    ],
    href: ''
  },
  {
    slug:        'Procedural Content Generation System',
    title:       'Procedural Content Generation System',
    category:    'Videogame · Tool',
    tagline:     'Procedural content generation system developed in Unity',
    cover:       '/images/projects/procdungeon/1.jpg',
    coverAlt:    'Procedural content generation system developed in Unity',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'Procedural content generation system developed in Unity, focused on building parametric environments with controllable and reproducible results. The project explores rule-based generation, combining deterministic logic and seeded randomness to create structured yet varied content, with a focus on flexibility and runtime control. Demonstrates a modular approach to environment generation, including layout construction, instancing, and rule-driven prop placement. In the video version, we initially used assets by Kay Lousberg, which were later replaced with our own proprietary assets for the final implementation.',
    gallery: [
      { thumbnail: '/images/projects/procdungeon/1.webp', type: 'youtube',  youtubeId: 'PhLcNhK9aro',  title: 'Making of', alt: 'Making of', size: 'half' },
      { thumbnail: '/images/projects/procdungeon/2.webp', alt: 'Live Action',   size: 'half', type: 'vimeo', vimeoId: '1179720968'},
    ],
    details: [
      { label: 'Destination',    value: 'Youtube' },
      { label: 'Technologies',    value: 'Unity3D, Blender' }
    ],
    href: 'https://www.patreon.com/posts/125773474'
  }, 
  {
    slug:        'TronnorT',
    title:       'TronnorT',
    category:    'Videogame · Mobile · Multiplayer',
    tagline:     'A minimalist multiplayer game where movement becomes your weapon.',
    cover:       '/images/projects/tronnort/2.jpg',
    coverAlt:    'A minimalist multiplayer game where movement becomes your weapon.',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_GAME,
    description: 'A minimalist multiplayer game where movement becomes your weapon. In TronnorT, players pilot spaceships that generate energy trails capable of destroying opponents, turning the arena into an ever-changing battlefield. Built around a procedural system, the game highlights how simple mechanics can create deep, competitive gameplay.',
    gallery: [
      { type: 'youtube',  youtubeId: 'BIKYK8qbdG0',  title: 'TronnorT making of',  thumbnail: '/images/projects/tronnort/1.jpg', alt: 'Making of TronnorT', size: 'full' },
      { thumbnail: '/images/projects/tronnort/4.jpg', alt: 'Gameplay',   size: 'half', type: 'vimeo', vimeoId: '1179636602'},
      { thumbnail: '/images/projects/tronnort/2.webp', alt: 'Showcase 1',   size: 'half', type: 'vimeo', vimeoId: '1179636529'},
      { thumbnail: '/images/projects/tronnort/3.jpg', alt: 'Showcase 2',   size: 'half', type: 'vimeo', vimeoId: '1179636570'},
    ],
    details: [
      { label: 'Destination',    value: 'iOS, Android' },
      { label: 'Technologies',    value: 'Unity3D, Blender, Photon' }
    ]
  }, 
  {
    slug:        'W.O.O.D',
    title:       'W.O.O.D - Character Design',
    category:    'Character Design',
    tagline:     'W.O.O.D was created as a free and fully shareable mascot',
    cover:       '/images/projects/wood/1.webp',
    coverAlt:    'W.O.O.D was created as a free and fully shareable mascot',
    placeholder: 'linear-gradient(135deg, #3d2e20 0%, #6b4a2e 100%)',
    icon: ICON_3D,
    description: 'W.O.O.D was created as a free and fully shareable mascot for our upcoming YouTube projects. W.O.O.D was first sculpted in high poly using Nomad, then retopologized and UV unwrapped in Blender, and textured in Substance Painter.',
    descriptionExtra: '',
    gallery: [
      { thumbnail: '/images/projects/wood/4.webp', alt: 'W.O.O.D 360°',   size: 'full', type: 'vimeo', vimeoId: '1179382087'},
      { src: '/images/projects/wood/2.png', alt: 'Unity view', size: 'half' },
      { src: '/images/projects/wood/3.webp', alt: 'Pose in Blender',  size: 'half' },
      { src: '/images/projects/wood/5.webp', alt: 'Sketch',  size: 'half' }
    ],
    details: [
      { label: 'Technologies',    value: 'Nomad, Blender, Substance Painter'}
    ],
    href: 'https://www.patreon.com/posts/130775711/',
  },
  {
    slug:        'Procedural Hands',
    title:       'Procedural Hands',
    category:    'VR · Tool Development',
    tagline:     'A procedural hand interaction system for VR',
    cover:       '/images/projects/hands/1.png',
    coverAlt:    '',
    placeholder: 'linear-gradient(135deg, #2e2030 0%, #4a3050 100%)',
    icon: ICON_3D,
    description: 'A procedural hand interaction system for VR, built to deliver physically coherent and immersive interactions. Fingers dynamically conform to surfaces through real-time collision detection, while predefined poses are continuously adapted to match environmental constraints.',
    gallery: [
      { thumbnail: '/images/projects/hands/3.png', alt: 'Showcase 1',   size: 'half', type: 'vimeo', vimeoId: '1179241748' },
      { thumbnail: '/images/projects/hands/2.png', alt: 'Showcase 2',   size: 'half', type: 'vimeo', vimeoId: '1179241691' },
      { thumbnail: '/images/projects/hands/1.png', alt: 'Showcase 3',   size: 'half', type: 'vimeo', vimeoId: '1179241602' },

    ],
    details: [
      { label: 'Client',   value: 'Fondazione Golinelli'    },
      { label: 'Destination',    value: 'Meta Quest 2, 3' },
      { label: 'Technologies',    value: 'Unity3D, Blender' }
    ],
  },
];


/** Helper used by getStaticPaths */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
