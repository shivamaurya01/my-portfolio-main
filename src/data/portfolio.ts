/**
 * Single source of truth for all portfolio content.
 * Update links, resume path and project URLs here.
 */

export const profile = {
  name: "Shiva Maurya",
  role: "Full-Stack Developer",
  intro:
  "Computer Science student passionate about full-stack development, building practical web applications and continuously improving my problem-solving skills.",

  // TODO: Replace with your real email address
  email: "er.shiva2327@mail.com",

  location: "Ghaziabad, India",

  github: "https://github.com/shivamaurya01",

  // TODO: Add your LinkedIn URL
  linkedin: "https://www.linkedin.com/in/shivva-maurya/",

  leetcode: "https://leetcode.com/u/shivva_maurya01/",

  // TODO: Add your CodeChef username
  codechef: "https://www.codechef.com/users/shiva_maurya",

  // Place your PDF at public/resume.pdf
  resume: "/resume.pdf",

  // Replace with your actual photo later
  photo: "https://i.postimg.cc/W32QYQWD/my-phtoo.jpg",
};

export const about = {
paragraphs: [
  "I am a 4th-year B.Tech Computer Science and Engineering student at Raj Kumar Goel Institute of Technology, Ghaziabad, passionate about software  and full-stack development. I enjoy building practical and user-focused applications using Java, JavaScript, React.js, Node.js, Express.js, and MongoDB.",

  "I have built projects like TalkSync and Wanderlust while continuously improving my DSA and development skills. I am currently preparing for software development opportunities and looking to grow as a developer.",
],

  facts: [
    {
      label: "Name",
      value: "Shiva Maurya",
    },
    {
      label: "Degree",
      value: "B.Tech in Computer Science & Engineering",
    },
    {
      label: "College",
      value: "Raj Kumar Goel Institute of Technology",
    },
    {
      label: "Batch",
      value: "2023–2027",
    },
    {
      label: "Location",
      value: "Ghaziabad, India",
    },
    {
      label: "Role",
      value: "Full-Stack Developer",
    },
  ],
};

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "Code2",
    items: [
      "Java",
      "JavaScript",
      "Python (Basic)",
      
    ],
  },

  {
    title: "Frontend",
    icon: "MonitorSmartphone",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: "Server",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },

  {
    title: "Database",
    icon: "Database",
    items: [
      "MongoDB",
      "Mongoose",
      "SQL",
    ],
  },

  {
    title: "Tools",
    icon: "Wrench",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      
    ],
  },

  {
    title: "Core Computer Science",
    icon: "Cpu",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
     
    ],
  },
];

export type Project = {
name: string;
description: string;
features?: string[];
tech: string[];
github: string;
demo?: string;
accent: string;
};


export const projects: Project[] = [
  {
    name: "TalkSync",

    description:
      "A real-time chat application built using the MERN stack.",

    features: [
      "User authentication",
      "Real-time messaging",
      "Online/offline user status",
      "User search",
      "Profile management",
      "Image upload",
      "Responsive chat interface",
      "Socket-based communication",
    ],

    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "Cloudinary",
    ],

    github: "https://github.com/shivamaurya01/REALTIMECHATAPP",

    demo: "https://talksync-pf5r.onrender.com/",

    accent: "chat",
  },

  {
    name: "Wanderlust",

    description:
      "A full-stack web application for exploring and managing travel listings.",

    features: [
      "Listing management",
      "User authentication",
      "Image uploads",
      "Location/map integration",
      "CRUD operations",
      "Responsive UI",
    ],

    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "JavaScript",
      "Leaflet/OpenStreetMap",
      "Cloudinary",
    ],

    github: "https://github.com/shivamaurya01/YourBnb",

    demo: "https://yourbnb-vkxh.onrender.com/listings",

    accent: "map",
  },

  {
    name: "Spotify Clone",

    description:
      "A frontend Spotify-inspired music interface.",

    tech: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
    ],

    github: "https://github.com/shivamaurya01/Spotify-Clone",

    accent: "music",
  },

 
];
export const education = [
{
institute: "Raj Kumar Goel Institute of Technology",
degree: "B.Tech – Computer Science and Engineering",
period: "2023 – 2027",
location: "Ghaziabad, India",
status: "Final Year ",
},
{
institute: "Rani Revati Devi S.V.N.I.C",
degree: "12th Grade",
period: "2022",
location: "Prayagraj, Uttar Pradesh",
status: "Completed ",
},
{
institute: "Rani Revati Devi S.V.N.I.C",
degree: "10th Grade",
period: "2020",
location: "Prayagraj, Uttar Pradesh",
status: "Completed ",

},
];


export const achievements = [
  {
    org: "CodeChef",
    title: "Completed the 500 Difficulty Rating Milestone",
    link:"https://www.codechef.com/certificates/public/3f1e688"
  },

  {
    org: "NPTEL",
    title: "Programming in Java",
    link: "https://cdn.phototourl.com/free/2026-08-09-1f2fa3c1-bf81-45de-bfa9-e98384031d20.png",
  },
  {
    org: "HackerRank",
    title: "CSS Certification",
    link: "https://www.hackerrank.com/certificates/4962c6922a3c",
  },
  {
    org: "Coursera",
    title: "Python for AI Development",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~KLEOLEN3YE1L/CERTIFICATE_LANDING_PAGE~KLEOLEN3YE1L.jpeg",
  },
];


export const navLinks = [
  {
    label: "Home",
    href: "#home",
  },

  {
    label: "About",
    href: "#about",
  },

  {
    label: "Skills",
    href: "#skills",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "Education",
    href: "#education",
  },

  {
    label: "Achievements",
    href: "#achievements",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];