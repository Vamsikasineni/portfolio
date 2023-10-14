/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vamsi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "vamsi krishna Portfolio",
    type: "website",
    url: "http://vamsikasineni.com/",
  },
};

//Home Page
const greeting = {
  title: "Vamsi Kasineni",
  logo_name: "vamsikrishna",
  subTitle:
    "A dedicated professional with a strong commitment to conceiving, developing, and nurturing comprehensive solutions that foster the growth of sustainable and scalable socio-technical ecosystems, driving meaningful and lasting impact.",
  secondarySubTitle:
    "Currently looking for:</span> Software Engineer, Full Stack Developer, Java Developer, and Front End Developer roles",
  resumeLink: "",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vamsi.chris1992@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vamsi_kasineni_",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FrontendImg",
      skills: [
        "⚡ Building responsive websites using React.js, Angular, and Vue.js",
        "⚡ Styling web applications with HTML, CSS, Bootstrap, and Material UI",
        "⚡ Writing tests with React Testing Library",
      ],
      softwareSkills: [
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0330",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vue-dot-js",
          style: {
            color: "#4FC08D",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:materialui",
          style: {
            color: "#0081CB",
          },
        },
        {
          skillName: "React Testing Library",
          fontAwesomeClassname: "simple-icons:testinglibrary",
          style: {
            color: "#E33332",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Building server applications with Node.js and Express.js",
        "⚡ Developing with Spring-Boot, Spring-DATA-JPA, and Spring-Security",
        "⚡ Designing and implementing Restful APIs and GraphQL APIs",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Spring-Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Spring-DATA-JPA",
          fontAwesomeClassname: "simple-icons:springdata",
          style: {
            color: "#005298",
          },
        },
        {
          skillName: "Spring-Security",
          fontAwesomeClassname: "simple-icons:springsecurity",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Restful API",
          fontAwesomeClassname: "simple-icons:api",
          style: {
            color: "#FF7F50",
          },
        },
        {
          skillName: "GraphQL API",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#E434AA",
          },
        },
      ],
    },
    {
      title: "Cloud & Tools",
      fileName: "CloudToolsImg",
      skills: [
        "⚡ Experience with cloud services like AWS",
        "⚡ Implementing CI/CD pipelines using GitHub Actions and Docker",
        "⚡ Version control with Git and project management with Jira",
        "⚡ API testing with Postman",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
  ],
};
// Education Page

const degrees = {
  degrees: [
    {
      title: "Texas Tech University",
      subtitle: "Master of Science (M.S) in Computer Science",
      logo_path: "ttu_logo.png",
      alt_name: "Texas Tech University",
      duration: "August 2021 - May 2023",
      descriptions: [
        "⚡ Graduated with a Master of Science degree in Computer Science with a GPA of 3.58/4.0.",
        "⚡ Developed expertise in a variety of programming languages, including Java, Python, JavaScript, TypeScript, and C#.",
        "⚡ Gained experience in front-end development using React.js, Redux, Angular, Vue.js, HTML, CSS, Bootstrap, Material UI, and React Testing Library.",
        "⚡ Acquired skills in back-end development with Node.js, Express.js, Spring-Boot, Spring-DATA-JPA, Spring-Security, and building Restful and GraphQL APIs.",
        "⚡ Worked with various databases, including MySQL, MongoDB, and MS SQL Server.",
        "⚡ Familiar with cloud services such as AWS, CI/CD, Docker, GitHub Actions, Git, Jira, and Postman.",
      ],
      certeficate_link: "https://www.ttu.edu/",
    },
    {
      title: "Gudlvalleru Engineering College",
      subtitle: "Bachelor of Technology (B. Tech) in Computer Science",
      logo_path: "gec_logo.jpg",
      alt_name: "Gudlvalleru Engineering College",
      duration: "July 2016 - June 2019",
      descriptions: [
        "⚡ Graduated with a Bachelor of Technology degree in Computer Science with a GPA of 3.33/4.0.",
        "⚡ Gained expertise in languages like Java, Python, JavaScript, TypeScript, and C#.",
        "⚡ Developed front-end skills in React.js, Redux, Angular, Vue.js, HTML, CSS, Bootstrap, Material UI, and React Testing Library.",
        "⚡ Gained proficiency in back-end development with Node.js, Express.js, Spring-Boot, Spring-DATA-JPA, Spring-Security, and building Restful and GraphQL APIs.",
        "⚡ Worked with databases like MySQL, MongoDB, and MS SQL Server.",
        "⚡ Acquired experience in using cloud services such as AWS, CI/CD, Docker, GitHub Actions, Git, Jira, and Postman.",
      ],
      certeficate_link: "http://gecgudlavalleru.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Front End Web Developer",
      subtitle: "Udacity",
      alt_name: "Udacity",
      duration: "January 2022 - March 2022",
      descriptions: [
        "⚡ Completed the Front End Web Developer Nanodegree program.",
        "⚡ Gained expertise in HTML, CSS, JavaScript, and front-end development.",
      ],
      certificate_link: "https://www.udacity.com/",
    },
    {
      title: "Oracle Certified Java SE 11 Programmer",
      subtitle: "Oracle",
      alt_name: "Oracle",
      duration: "April 2021",
      descriptions: [
        "⚡ Achieved certification as an Oracle Certified Java SE 11 Programmer.",
        "⚡ Demonstrated proficiency in Java programming and SE 11 features.",
      ],
      certificate_link:
        "https://education.oracle.com/java-se-11-programmer-i/pexam_1Z0-815",
    },
    {
      title: "Angular Certification",
      subtitle: "Udemy",
      alt_name: "Udemy",
      duration: "December 2020",
      descriptions: [
        "⚡ Earned a certification in Angular development.",
        "⚡ Gained expertise in building web applications with Angular.",
      ],
      certificate_link: "https://www.udemy.com/",
    },
    {
      title: "Certified ETL Tester (CET)",
      subtitle: "ETL Testing",
      alt_name: "ETL Testing",
      duration: "May 2019",
      descriptions: [
        "⚡ Received certification as an ETL Tester.",
        "⚡ Demonstrated skills in ETL (Extract, Transform, Load) testing.",
      ],
      certificate_link: "https://www.etltesting.com/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  subtitle: "Work Experience",
  description:
    "I have gained valuable experience through various roles in software engineering and development. Here are some of my significant work experiences:",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "SVL LLC",
          company_url: "https://www.svlllc.com/",
          duration: "August 2022 - Present",
          location: "Collierville, TN",
          description: [
            "Proficient in full-stack development, leveraging Java and Node.js to design, build, and optimize web applications. Utilized Java Spring Boot and Node.js frameworks to create scalable and responsive solutions.",
            "Experienced in cloud-based architecture and deployment, with a strong emphasis on AWS services such as EC2, Lambda, S3, and RDS. Leveraged AWS infrastructure for efficient and cost-effective application scaling and management.",
            "Played a key role in the Software Development Life Cycle (SDLC), following Agile methodologies to ensure the delivery of high-quality software. Collaborated with cross-functional teams to meet project goals and deadlines.",
          ],
          color: "#0879bf",
        },
        {
          title: "Student Assistant",
          company: "Texas Tech University",
          company_url: "https://www.ttu.edu/",
          duration: "August 2021 - July 2022",
          location: "Lubbock, Texas",
          description: [
            "Developed interactive front-end web components for university department websites utilizing HTML, CSS, and Angular, enhancing user engagement and experience.",
            "Executed responsive design techniques and ensured cross-browser compatibility, resulting in an optimized user experience across various devices and browsers.",
          ],
          color: "#9b1578",
        },
        {
          title: "Software Engineer",
          company: "M Touch Labs PVT, LTD",
          company_url: "https://mtouchlabs.com/",
          duration: "January 2020 - June 2021",
          location: "Hyderabad, INDIA",
          description: [
            "Built web applications and features with HTML, CSS, React.js, Node.js, and MongoDB, resulting in a 13% increase in customer engagement by working in an Agile-based SDLC environment and participating in scrum sessions.",
            "Participated in the development and maintenance of Restful API for seamless client-side integration.",
            "Coordinated with cross-functional teams, including designers, product managers, and software engineers to deliver high-quality and scalable solutions.",
            "Executed unit tests on components to guarantee application functionality, achieving 98% test coverage.",
            "Deployed the applications to AWS and effectively resolved any deployment issues for successful application delivery.",
          ],
          color: "#fc1f20",
        },
      ],
    },
    // ... Other sections
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_logo.svg",
    description:
      "I am available on almost every social media. You can message me.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Currenlty Located in Dallas, TX Feel Free to reach me!",
    Place: "Frisco",
    country: "US",
    state: "TEXAS",
    zipcodeCode: "75034",
    streetAddress: "9400 wade blvd",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/h2BW6DWHWN3x2zFbA",
  },
  EmailSection: {
    title: "Email",
    subtitle: "vamsi.chris1992@gmail.com",
  },
  phoneSection: {
    title: "mobile",
    subtitle: "+1 (806)730-8411",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
