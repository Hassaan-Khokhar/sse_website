import { EventItem, GalleryItem, Program, ResourceItem } from '../types';

export const SCHOOL_LOGO = "https://lh3.googleusercontent.com/aida-public/AB6AXuDp0GcanqoSj4abbPYIrVK7TqwsERHKRxu87pPb04QLIvc6gwf6rU4lpH60FU-IWFgXFwIYy1TaQCPY4gxKhjHH71WGgX-wYNbZOM3elA55aXxZhAvqeGexZJGN4kU--UB8arr4sey3r49i5bLo87QzkzauC2V6s3kgc7d2hZlFMQ_OS1SQwB3DxSyBYalfVbze2yjRkgArnlYzEQf2y0IT-6s1Mz8MmDnNkPzHscQyvTp_RZnbjpNM7aIKO6MkQ_GhXq8";

export const HERO_BG = "/school_building.jpg";

export const WELCOME_IMG = "/prize.jpeg";

export const DIRECTOR_IMG = "/chairman.jpg";

export const GALLERY_LAB = "https://lh3.googleusercontent.com/aida-public/AB6AXuABE4vKGsa15vBI-Z_MYqxfSSQ_lZDkmlpxv8xAWw8OR1KVatCMeBkwNe_ISHAi8tj5mhKBdQ8oCnDv3DLp1Ibs9CYBho26Lc-8xQvpnyXAfbUb_Y-ttvCFFedtv2ubZbdI-R4EPsWTEO-0XHX6qX2R5WJ6yYBykLw2GeObn6SOx71IwSoOkJJh9-g62oZ5wYIK6VuIngzWQsEF4a8lWGtnRKdqu9thS3BGjcuUmR6WqaGCbuFpv5I9nQ";

export const GALLERY_SPORTS = "https://lh3.googleusercontent.com/aida-public/AB6AXuDnHbDQV83Ol34Zac8GKljl9_oP_WQKedLfL48FfI8pc-nVSEfzFjRJZRSnTY-vleVrCm3OuOu7yyqsHTZl38UWP00aBAA2mefYO6C1Z9XP0cKRbVdcQH5Dqe4qULD6OmJDKXnuAiiqrZFQxstMvLEuaYpAQ---3_54uh5f8MRjCIUN59Cq3NmRqOX0j5ol4hyM1KSozu07ftZeiQ06EKAL_J9IiDSDbxhjVGYcwpZBUqyQiNs6qhGm6g";

export const GALLERY_ARTS = "https://lh3.googleusercontent.com/aida-public/AB6AXuDo4hSKHG3klh5m1n6kiKYWwrnuA8dZkcf3kGZNQnYNQIUfSnLybMwM7508zfLnGoxroWnbWnB6l-pa3vvWaw3ZzBXipcR8ao3wFFTv7f88BMmktC6y59LuKhynnJ66RRrBKUvxVKAZwyEWIGXF8XYUJEzLepsJDKHg7WdfupHCWaVsBIHJLS3xZb5w7xmmekOFTeRxDBSUk2iOdVuU9hokh1liK1Q8BpyVx4T8-sBsGJ_CAteNcsdKsw";

export const GALLERY_COMMUNITY = "https://lh3.googleusercontent.com/aida-public/AB6AXuB8XVA-fuyHhb38kDbqDVuKzmHD_yxDXMcqoTmEDD8JJWDBn_WnumqQn0lbCGEuPfNlYeP1UsJ__253lEW3U5plkRJOfs_-UNClbnr3GhBKffQQenvi0eOkH0fKym0ZYFmB1fjJbB2-o5_apqoovuX_qSYZ39WKRt7wVYZK3M9swmWj_sZrEO88vBxgpOSbiLCdF0jXWkLWG93tiWekGZ4vclTwlHnaCoVA0fK4M5yTBr0qHiz1FnovjQ";

export const PROGRAMS_LIST: Program[] = [
  {
    id: 'primary-school',
    title: 'Primary School Foundation',
    category: 'Primary',
    description: 'Nurturing curiosity, early literacy, logical thinking, and social values in a playful yet structured inquiry environment.',
    highlights: [
      'Inquiry-based foundational learning',
      'Bilingual language proficiency development',
      'STEAM activities & creative arts integration',
      'Emotional intelligence & character building'
    ],
    duration: 'Grade 1 - 5',
    ageGroup: 'Ages 5 - 10',
    icon: 'child_care',
    image: WELCOME_IMG
  },
  {
    id: 'middle-school',
    title: 'Middle School Discovery',
    category: 'Middle',
    description: 'Empowering pre-teens with critical thinking, scientific exploration, robotic labs, and collaborative project-based learning.',
    highlights: [
      'Interactive Science & AI Exploration Labs',
      'Advanced Mathematics & Analytical Problem Solving',
      'Debate, Model UN & Public Speaking Training',
      'Comprehensive Athletic & Physical Education'
    ],
    duration: 'Grade 6 - 8',
    ageGroup: 'Ages 11 - 13',
    icon: 'menu_book',
    image: GALLERY_LAB
  },
  {
    id: 'high-school',
    title: 'Senior High School Excellence',
    category: 'High School',
    description: 'Rigorous board preparation coupled with research projects, leadership summits, and career counseling for top universities.',
    highlights: [
      'Board Examination Mastery & Mock Testing',
      'University Guidance & Scholarship Advisory',
      'Independent Research Projects & Mentorship',
      'National Olympiad Prep in Physics, Chem, Math & CS'
    ],
    duration: 'Grade 9 - 10',
    ageGroup: 'Ages 14 - 15',
    icon: 'school',
    image: HERO_BG
  },
  {
    id: 'a-levels-ib',
    title: 'Cambridge A-Levels & IB Diploma',
    category: 'A-Levels',
    description: 'Nationally recognized pre-university curriculum equipping students for admissions to top tier institutions.',
    highlights: [
      '25+ Subject Choices across Pre-Med, Pre-Engineering & Humanities',
      'Dedicated SAT / ACT / IELTS Coaching Center',
      'Community Leadership & Summer Internship placements',
      'Extended Essay & Theory of Knowledge mentorship'
    ],
    duration: 'Grade 11 - 12',
    ageGroup: 'Ages 16 - 18',
    icon: 'workspace_premium',
    image: GALLERY_COMMUNITY
  }
];

export const EVENTS_LIST: EventItem[] = [
  {
    id: 'science-tech-fair-2024',
    day: '24',
    month: 'OCT',
    tag: 'Signature Event',
    title: 'Annual Science & Tech Fair 2024',
    description: 'Showcasing the next generation of innovators and thinkers across robotics, renewable energy, AI applications, and biotechnology.',
    time: '09:00 AM - 04:30 PM',
    location: 'Main Auditorium & Innovation Hub',
    category: 'Academic & Science'
  },
  {
    id: 'sports-gala',
    day: '12',
    month: 'NOV',
    tag: 'Athletics',
    title: 'Inter-House Sports Championship',
    description: 'A thrilling 3-day multi-discipline tournament featuring track & field, basketball, swimming, cricket, and martial arts demonstrations.',
    time: '08:30 AM - 05:00 PM',
    location: 'Superior Athletic Complex',
    category: 'Sports & Wellness'
  },
  {
    id: 'cultural-fest',
    day: '05',
    month: 'DEC',
    tag: 'Arts & Music',
    title: 'Annual Cultural & Drama Night',
    description: 'Live theatrical performances, musical orchestra, art gallery exhibitions, and culinary stalls celebrating national diversity.',
    time: '05:00 PM - 09:30 PM',
    location: 'Outdoor Amphitheater',
    category: 'Culture'
  }
];

export const RESOURCES_LIST: ResourceItem[] = [
  {
    id: 'academic-calendar',
    title: 'Academic Calendar 2024-25',
    type: 'calendar',
    icon: 'calendar_month',
    size: '2.4 MB PDF',
    updated: 'Updated Term I 2024',
    description: 'Complete breakdown of term dates, examination schedules, national holidays, and major school events.'
  },
  {
    id: 'fee-structure',
    title: 'Fee Structure & Scholarships',
    type: 'fee',
    icon: 'payments',
    size: '1.8 MB PDF',
    updated: 'Session 2024-25',
    description: 'Comprehensive tuition fee schedules, transport charges, lab fees, and merit-based scholarship application guidelines.'
  },
  {
    id: 'curriculum-prospectus',
    title: 'Curriculum Prospectus',
    type: 'prospectus',
    icon: 'menu_book',
    size: '6.5 MB PDF',
    updated: 'Edition 2024',
    description: 'Detailed syllabus guides for Primary, Middle, High School, and Cambridge A-Levels with faculty profiles.'
  }
];

export const BENTO_GALLERY: GalleryItem[] = [
  {
    id: 'bento-1',
    title: 'Annual Sports Gala',
    category: 'Sports',
    image: '/sports_gala.jpg',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
    description: 'Students competing in the annual sports gala displaying physical excellence, teamwork, and athletic spirit.'
  },
  {
    id: 'bento-2',
    title: 'Debate Championship',
    category: 'Extracurriculars',
    image: '/girl_debate.jpg',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    description: 'Empowering students to articulate their ideas confidently on stage.'
  },
  {
    id: 'bento-3',
    title: 'Student Leadership',
    category: 'Leadership',
    image: '/ladycaptain.jpg',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    description: 'Fostering responsibility and discipline through the student council.'
  },
  {
    id: 'bento-4',
    title: 'Prize Distribution',
    category: 'Academics',
    image: '/prize_distribution.jpg',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    description: 'Recognizing academic excellence and outstanding achievements.'
  },
  {
    id: 'bento-5',
    title: 'Rescue 1122 Training',
    category: 'Community',
    image: '/rescue1122.jpg',
    colSpan: 'md:col-span-1',
    rowSpan: 'md:row-span-1',
    description: 'Equipping students with essential life-saving skills and emergency preparedness.'
  },
  {
    id: 'bento-6',
    title: 'Morning Assembly',
    category: 'Campus',
    image: '/assembly.jpg',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    description: 'Students gathered for the morning assembly, fostering a sense of unity and discipline.'
  },
  {
    id: 'bento-7',
    title: 'Teachers Day Celebration',
    category: 'Events',
    image: '/teachers_day.jpg',
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-1',
    description: 'Honoring our dedicated educators who inspire and shape the leaders of tomorrow.'
  }
];

export const TOUR_LOCATIONS = [
  {
    id: 'main-quad',
    name: 'Main Quad & Administration',
    image: HERO_BG,
    description: 'The iconic central campus landmark featuring modern sustainable glass architecture, wide geometric lawns, and administrative offices.'
  },
  {
    id: 'library-hub',
    name: 'Digital Library & Learning Commons',
    image: WELCOME_IMG,
    description: 'A multi-story quiet study center stocked with 30,000+ print volumes and digital research terminals for collaborative student learning.'
  },
  {
    id: 'stem-lab',
    name: 'Advanced Bio & Chemistry Research Lab',
    image: GALLERY_LAB,
    description: 'Equipped with digital microscopes, chemical fume hoods, and automated sensor kits for practical experimentations.'
  },
  {
    id: 'sports-arena',
    name: 'Indoor Sports Complex',
    image: GALLERY_SPORTS,
    description: 'A climate-controlled multi-sport facility hosting basketball, badminton, squash, and gymnastic training.'
  },
  {
    id: 'amphitheater',
    name: 'Outdoor Student Amphitheater',
    image: GALLERY_COMMUNITY,
    description: 'Tiered seating outdoor venue where open-air lectures, club meetings, and evening cultural festivals take place.'
  }
];
