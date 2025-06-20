import { Icons } from "@/components/icons";
import { FolderOpen, HomeIcon, Notebook, SquareTerminal } from "lucide-react";

export const DATA = {
  name: "Elkoh Zakaria",
  initials: "MP",
  url: "https://www.elkoh.me",
  location: "Greater Noida, UP",
  locationLink:
    "https://www.google.com/maps/place/Bennett+University/@28.4431291,77.5873979,13.43z/data=!4m6!3m5!1s0x390cbf94deb6bc39:0x7ba6bedc9a2b537f!8m2!3d28.4506465!4d77.5841978!16s%2Fg%2F11c3wvm4q_?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  description: "React.js/Node.js | DevOps | Cloud (AWS & Azure)",
  summary:
    "Passionate Full-Stack Developer with almost 3 years of experience building scalable web applications and cloud infrastructure. I specialize in React.js/Node.js development while architecting robust DevOps pipelines and cloud solutions on AWS & Azure. From crafting engaging user interfaces to deploying microservices architectures with Docker & Kubernetes, I deliver end-to-end solutions that drive business growth. My recent work includes deploying 5-service microservices platforms with CI/CD automation, achieving 99.9% uptime through strategic cloud optimization. Ready to transform your ideas into production-ready applications with modern tech stack and cloud-native architecture.",
  avatarUrlLight: "/mehul_light.png",
  // avatarUrlDark: "/mehul_dark.png",
  avatarUrlDark: "/elkoh.png",
  skills: [],
  work: [
    {
      company: "Dashy",
      href: "https://dashypay.com/",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl:
        "https://static-files.umso.co/lib_fuQmwDFdYtrMKkHt/fi63s5iqxhpdmua4.svg?w=250&dpr=2",
      start: "APR 2025",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
      technologies: [
        "Docker",
        "CI/CD",
        "k8s",
        "MicroServices",
        "linux",
        "Gmail API",
        "Azure",
        "App Service",
        "ACR",
        "NAT Gateway",
        "Vnet",
        "Subnets",
      ],
    },
    {
      company: "Axigeo",
      badges: [],
      href: "https://axigeo.com/",
      location: "Remote",
      title: "Software Engineer",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GdD5jCBJXArpRbv41L29YVLZsKNmW_4ReA&s",
      start: "APR-2024",
      end: "APR-2025",
      description:
        "Collaborated with the development team to build  and deploy a comprehensive platform for managing materials, clients, and workers, docs, events, holydays...",
      technologies: [
        "JavaScript",
        "React JS",
        "Express JS",
        "AWS",
        "EC2",
        "S3",
        "ECR",
        "ECS",
        "Docker",
        "CI/CD",
        "MongoDB",
        "Tailwind CSS",
        "Rest API",
        "MUI",
      ],
    },
    {
      company: "Freelancer",
      href: "https://elkoh.me/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl:
        "https://d3s3shtvds09gm.cloudfront.net/uploads/2023/06/freelancer-logo.png",
      start: "SEP-2022",
      end: "APR-2024 ",
      description:
        "Developed responsive web applications, delivering client-focused, user-friendly designs. Managed projects independently, ensuring timely and quality solutions. Technologies:  JavaScript, React JS, Tailwind CSS, Bootstrap, Responsive Design, CSS, HTML, Rest API, MUI, Shadcn UI. Taches: Developed and maintained reusable React components. Collaborated with backend developers to design and implement RESTful API endpoints for frontend consumption. Utilized version control (Git) for efficient collaboration",
      technologies: [
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "CSS",
        "HTML",
        "Rest API",
        "MUI",
        "Shadcn UI",
      ],
    },
  ],
  education: [
    {
      school: "YouCode - UM6P",
      href: "https://www.youcode.ma/",
      degree: "JavaScript Development and Devops & Cloud engineering",
      logoUrl: "https://avatars.githubusercontent.com/u/77738171?s=280&v=4",
      start: "2023",
      end: "2025",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
  ],
  skillCategories: {
    languages: ["JavaScript", "TypeScript", "Node.js"],
    frameworks: [
      "React",
      "Next.js",
      "Nest.js",
      "Express.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
    ],
    devops: [
      "Docker",
      "CI/CD",
      "Terraform",
      "Git",
      "GitHub",
      "GitLab",
      "Microservices",
      "JWT",
      "Let's Encrypt",
      "Linux",
    ],
    cloud: [
      "AWS",
      "EC2",
      "S3",
      "ECS",
      "VPC",
      "Load Balancer",
      "Lambda",
      "API Gateway",
      "ECR",
      "RDS",
      "Cognito",
      "Azure",
      "App Service",
      "ACR",
      "NAT Gateway",
      "Vnet",
      "App Insights",
      "Grafana",
    ],
    databases: ["MongoDB", "MySQL", "DynamoDB"],
    tools: ["Trello", "Jira", "Firewalls", "App Gateway"],
  },
  learning: ["Kubernetes"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
    { href: "/blog", icon: Notebook, label: "Blog" },
    { href: "/cli", icon: SquareTerminal, label: "Cli" },
  ],
  contact: {
    email: "contact@elkoh.me",
    tel: "+212 705074846",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://github.com/zakaria-elkoh",
      //   icon: Icons.github,
      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/zakaria-elkoh",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/elkoh00",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      Email: {
        name: "Send Email",
        url: "mailto:contact@elkoh.me",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  projects: [
    {
      title: "foly.cc",
      href: "https://www.foly.cc/",
      dates: "Feb 2025", // Add actual creation dates
      active: true,
      description:
        "A platform where people can create and manage their professional portfolios online. Users can sign up, fill in their information through an intuitive dashboard, select from various responsive templates, and get a custom URL to showcase their work and skills to potential employers or clients.",
      technologies: [
        "Next.js",
        "NestJS",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "AWS S3",
        "Railway",
        "Mailtrap",
        "Oauth",
        "JWT",
        "Rest API",
        "letsencrypt",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.foly.cc/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add image path if available
    },
    {
      title: "My portfolio",
      href: "https://www.elkoh.me/",
      dates: "Feb 2025", // Add actual creation dates
      active: true,
      description:
        "A personal portfolio website where I can showcase my projects, share my professional experience, and publish blog posts about tech topics. The platform serves as a comprehensive digital presence where visitors can learn about my skills, view my work history, explore my side projects, and read my technical writings.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.elkoh.me/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "", // Add image path if available
    },
  ],
  more_projects: [
    {
      title: "Eyebook",
      href: "Nov 2022", // Add actual URL if available
      dates: "Month Year - Month Year", // Replace with actual creation dates
      active: true,
      description:
        "A Social Media website where you can add posts and see others posts, and add comments to others posts. It is responsive and easy to use.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "API",
        "Axios",
        "JSON",
        "FontAwesome",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://eyeboook.netlify.app/", // Add actual demo URL
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source Code",
        //   href: "#", // Add actual repository URL
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "", // Add image path if available
    },
    {
      title: "Gym Coach",
      href: "#", // Add actual URL if available
      dates: "Nov 2022", // Add dates if available
      active: true,
      description:
        "A responsive landing page built with modern technologies for fitness coaching services.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "FontAwesome"],
      links: [
        {
          type: "Live Demo",
          href: "https://mazine-elhamdouchi.netlify.app/", // Add actual demo URL
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source Code",
        //   href: "#", // Add actual repository URL
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "", // Add image path if available
    },
    {
      title: "Bondi",
      href: "#", // Add actual URL if available
      dates: "Oct 2022", // Add dates if available
      active: true,
      description:
        "A responsive blog website built using modern web technologies with clean and modern design.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "FontAwesome"],
      links: [
        {
          type: "Live Demo",
          href: "https://boondii.netlify.app/", // Add actual demo URL
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source Code",
        //   href: "#", // Add actual repository URL
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "", // Add image path if available
    },
    {
      title: "Bookmark",
      href: "#", // Add actual URL if available
      dates: "Jan 2023", // Add dates if available
      active: true,
      description:
        "A responsive landing page built using modern technologies with clean design and smooth user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "FontAwesome"],
      links: [
        {
          type: "Live Demo",
          href: "https://boookmark.netlify.app/", // Add actual demo URL
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source Code",
        //   href: "#", // Add actual repository URL
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "", // Add image path if available
    },
    {
      title: "Evento",
      href: "#", // Add actual URL if available
      dates: "", // Add dates if available
      active: true,
      description:
        "An Event Platform where you can find, reserve and create events with modern user interface and functionality.",
      technologies: ["PHP", "Laravel", "JavaScript", "HTML", "Tailwind CSS"],
      links: [
        // {
        //   type: "Live Demo",
        //   href: "#", // Add actual demo URL
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source Code",
          href: "https://github.com/zakaria-elkoh/evento", // Add actual repository URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add image path if available
    },
    {
      title: "Dental",
      href: "#", // Add actual URL if available
      dates: "Jan 2023", // Add dates if available
      active: true,
      description:
        "A multi-pages dentist website that is responsive and contains light and dark mode for better user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "FontAwesome"],
      links: [
        {
          type: "Live Demo",
          href: "https://denteloo.netlify.app/", // Add actual demo URL
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source Code",
        //   href: "#", // Add actual repository URL
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "", // Add image path if available
    },
    {
      title: "LawConny",
      href: "#", // Add actual URL if available
      dates: "Mar 2024", // Add dates if available
      active: true,
      description:
        "A platform for legal enthusiasts to connect, share posts, chat, and follow each other, fostering a vibrant community of law professionals and students.",
      technologies: [
        "React",
        "JavaScript",
        "PHP",
        "Laravel",
        "Tailwind CSS",
        "shadcn/ui",
        "React Query",
      ],
      links: [
        //   {
        //     type: "Live Demo",
        //     href: "#", // Add actual demo URL
        //     icon: <Icons.globe className="size-3" />,
        //   },
        {
          type: "Source Code",
          href: "https://github.com/zakaria-elkoh/LawConny", // Add actual repository URL
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "", // Add image path if available
    },
    {
      title: "Movie Mingle",
      href: "#", // Add actual URL if available
      dates: "Feb 2023", // Add dates if available
      active: true,
      description:
        "A film discovery platform created in collaboration with a team of four. Focus was on the landing page to ensure an engaging entry point for movie enthusiasts.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "FontAwesome"],
      links: [
        {
          type: "Live Demo",
          href: "https://zakaria-elkoh.github.io/Movie-Mingle/", // Add actual demo URL
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source Code",
        //   href: "#", // Add actual repository URL
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "", // Add image path if available
    },
  ],
};
