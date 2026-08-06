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
    link: "https://storage.googleapis.com/2026-mar-halltickets/certificate-generation-apr26/final/regular/noc26-cs36/NPTEL26CS36S75510022704661917.pdf?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=archive-run%40nptel-exam.iam.gserviceaccount.com%2F20260804%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260804T215341Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=37b92176d519e52cdbf48eb4903ee79c3ef1c8d03a815fd5430a39f0ce0a680599cd5c65bfca570bc9d01c0c76b735996b82a5fc0fee0d583448c7316763f48ad2262be1ed65d928199669e49d02ceae3ab56a94aecd55289400d362ddbbdedd9d8d556aee93384ffc85e6261f9760b1c1b6a036377511416210914bef635e61b176c638a728366b6976744d19d6f760b9b24864b69bd12ae1602cfc19d7fc96932ff12092c59e89abee1835001e3c19a76e8746178ce038a1cd34abd56c8919d1c15d9f0da85c1ed8f06e75c7441708ecf967dd7889e2f0b136a5ff6b6e63b50e466e847e2ae58c9ef738042c6ae8e0166a3ce372a95251d88785b3df737b10",
  },
  {
    org: "HackerRank",
    title: "CSS Certification",
    link: "https://www.hackerrank.com/certificates/4962c6922a3c",
  },
  {
    org: "Coursera",
    title: "Python for AI Development",
    link: "",
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