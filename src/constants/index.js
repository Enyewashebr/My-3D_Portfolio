const navLinks = [
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "My features",
    link: "#features",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/HTML.png",
  },
  {
    imgPath: "/images/logos/javascript1.png",
  },
  {
    imgPath: "/images/logos/python1.png",
  },
  {
    imgPath: "/images/logos/React2.png",
  },
  {
    imgPath: "/images/logos/three1.png",
  },
  {
    imgPath: "/images/logos/next.png",
  },
  {
    imgPath: "/images/logos/django1.png",
  },
  {
    imgPath: "/images/logos/git.png",
  },
  {
    imgPath: "/images/logos/node1.png",
  },

  {
    imgPath: "/images/logos/express.png",
  },
  {
    imgPath: "/images/logos/mysql1.png",
  },

  {
    imgPath: "/images/logos/vite1.png",
  },
];

const abilities = [
  {
    imgPath: "/images/code.png",
    title: "Front-End Excellence",
    desc: "Building high-performance, responsive, and visually polished web applications using React, Tailwind CSS, and modern JavaScript frameworks.",
  },
  {
    imgPath: "/images/brain.png",
    title: "Strong Analytical Mindset",
    desc: "Combining engineering precision with creativity to design scalable solutions and write clean, maintainable code.",
  },
  {
    imgPath: "/images/learn.png",
    title: "future Development Path",
    desc: "Continuously learning and expanding into back-end development, cloud integration, Machine Learning, and advanced software architecture.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Enyew has graduatedwith the bachelor of science degree in chemical and bioengineering on une 26, 2025 with Distniction and Exit exam result of passing mark, taken in June 2025.",
    imgPath: "/images/AAU6.png",
    logoPath: "/images/AAU5.png",
    title: "Bsc. Chemical and Biengineering",
    date: "June 2021 -June 2025",
    responsibilities: [
      "Navigated campus life independently, mastering time management and personal responsibility.",
      "Collaborated with peers on academic and extracurricular projects, strengthening teamwork and leadership skills.",
      "Leveraged campus resources to enhance academic performance and professional growth.",
    ],
  },
  {
    review:
      "Enyew has graduated with certifications in Software Engineering Program in Frontend Web Development, AI Career Essentials, and Professional Foundations from ALX Africa.",
    imgPath: "/images/ALX3.png",
    logoPath: "/images/ALX2.png",
    title: "Software Engineer (Frontend & AI)",
    date: "March 2024 - October 2024",
    responsibilities: [
      "Developed critical leadership, communication, problem-solving, and teamwork skills for success in global work environments.",
      "Gained hands-on skills in building responsive, user-friendly web applications using modern frameworks, API integrations and best practices.",
      "Built a strong foundation in artificial intelligence concepts, tools, and applications, preparing for future roles in data-driven and AI-powered fields.",
    ],
  },
  {
    review:
      "Enyew has completed Software Engineering with the Power Learn Project (PLP) in 2025.",
    imgPath: "/images/PLP2.png",
    logoPath: "/images/PLP3.png",
    title: "Software Engineer(Full Stack)",
    date: "June 2024 - present",
    responsibilities: [
      "Gained practical experience in Python programming, databases (MySQL), and full-stack web development using MongoDB, Node.js, and Express.js.",
      "Applied software engineering principles to design, build, and deploy efficient, scalable, and user-focused applications.",
      "Strengthened ability to integrate backend and frontend technologies, creating complete solutions aligned with modern industry standards.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
