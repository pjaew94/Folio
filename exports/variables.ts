import {
  INavigation,
  IProjectInfo,
  IAbout,
  IWorkExperience,
  IEducation
} from "./interfaces";

export const navigation: INavigation[] = [
  {
    route: "/",
    text: "Home",
  },
  {
    route: "/work",
    text: "Work",
  },
  {
    route: "/about",
    text: "About",
  },
  {
    route: "/contact",
    text: "Contact",
  },
  {
    route: "/resume",
    text: "Resume",
  },
];

export const projectList: IProjectInfo[] = [
  {
    abbreviation: "jlcServes",
    name: ["JLC", "Serves"],
    type: "Non-Profit",
    link: "https://www.jlcserves.org/",
    subString: "Donation site for non-profit organization",
    github: "https://github.com/pjaew94/JLC-Serves-v2-FrontEnd",
    date: "04.06.2021",
    imgs: [
      {
        disp: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg1.png",
        blur: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg1Blur.png",
      },
      {
        disp: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg2.png",
        blur: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg2Blur.png",
      },
      {
        disp: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg3.png",
        blur: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg3Blur.png",
      },
      {
        disp: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg4.png",
        blur: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg4Blur.png",
      },
      {
        disp: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg5.png",
        blur: "https://portfolio-fin.s3.amazonaws.com/jlcServesImg5Blur.png",
      },
    ],
    summary: [
      "Developed in early 2021, JLC Serves is a platform for donations funding Jesus Love Church located in suburban Philadelphia. JLC Serves fuels the congregation to continue and thrive in helping the homeless in the city of Philadelphia every week.",
      "The web application was built to share the story of Jesus Love Church and accept donations from various payment methods. Since launch, the small church gained considerable recognition and received thousands in donations from locals and others around the world.",
    ],
    history: [
      "Jesus Love Church was founded in winter of 2015. With merely dozen members within the church, the congregation was unable to fulfill their dream to serve the community due to insufficient funds. However, after a few years, the church grew considerably and was now in position to finally reach out to those in need.",
      "In the summer of 2020, with the small amount of funds from its members, Jesus Love Church set out to distribute 100 goodie bags containing a hot dog, mask, chips, and water in Philadelphia. After seeing firsthand how many people were in need, the pastor and the church decided to commit to handing out 100 goodie bags every Sunday.",
      "Although the church began to struggle financially and physically from the trips, the congregation has yet to miss a Sunday since the first trip to the city.",
    ],
    problem: [
      "The church was finally fulfilling their dreams of helping the community. Additionally, local churches, donation centers, and supermarkets gained notice of the church’s mission. JLC were able to receive donations from locals via. cash and checks. However, as the congregation’s mission gained notice from more distant places, it was harder for those to contribute as there were no efficient ways of receiving the donations.",
      "In addition, JLC quickly realized how much the mission could scale by spreading their message. However, the only way the small church’s mission was being spread was through the word of mouth.",
    ],
    myRole: [
      "My contribution to the church’s mission was simple: create a platform that told JLC’s message and received donations. The website displays the church’s mission as well as images to capture the work the small congregation was doing. It also tells the history and the upcoming of the church. Finally, I was able to implement various payment methods to consider the donor’s location and preference.",
    ],
    impact: [
      "Since the launch of the site in beginning of 2021, the church gained considerable recognition and thousands in donations from all around the world. JLC was able to increase their weekly goodie bag portions from 100 to 200. They also have provided hundreds of sleeping bags to the homeless. The congregation also built 3 schools in Haiti and funds the meals/teachers located in those schools as well as missionaries in Russia to this day. ",
    ],
    technologies: [
      {
        tech: "React",
        desc: "Optimal front-end framework for easy implementation and maintainability",
      },
      {
        tech: "Redux",
        desc: "Global state manager for simpler readability and maintenance",
      },
      {
        tech: "NodeJS",
        desc: "Effortless method of developing fast web servers for the project",
      },
      {
        tech: "ExpressJS",
        desc: "Minimal framework for NodeJS that provides great performance as well as scalability",
      },
      {
        tech: "MongoDB",
        desc: "Great database for storing and mutating undemanding data sets",
      },
      {
        tech: "Mongoose",
        desc: "No-brainer pair for MongoDB for seamless data management and schema validation",
      },
      {
        tech: "Amazon S3",
        desc: "Exceptional cloud storage for media files to increase the website's performance",
      },
      {
        tech: "Stripe",
        desc: "Online payment processing for variety of payment methods for accepting donations",
      },
      {
        tech: "Paypal Dev.",
        desc: "Implemented as some donors may want to PayPal for the transaction",
      },
      {
        tech: "Styled-Components",
        desc: "Component-level styling library chosen to test it's implementation efficiency against my ideal styling method (SCSS)",
      },
      {
        tech: "RESTful API",
        desc: "Used to allow client and the server to evolve individually",
      },
      {
        tech: "Netlify",
        desc: "Amazing platform to host the client side of application - Avoided hosting client on Heroku, as Heroku's IP address evolves based on activity of site, which produces abysmal rendering times",
      },
      {
        tech: "Heroku",
        desc: "Used to host server side of application - Simple method of creating a server that runs 24/7",
      },
    ],
  },
  {
    abbreviation: "jlcAcademy",
    name: ["JLC", "Academy"],
    type: "Education",
    link: "https://www.jlcacademy.com/",
    subString:
      "Educational platform for effective student and teacher interaction",
    github: "https://github.com/pjaew94/JLC-Tutor-FrontEnd",
    date: "10.20.2020",
    imgs: [
      {
        disp: "https://portfolio-fin.s3.amazonaws.com/jlcAcademyImg1.png",
        blur: "https://portfolio-fin.s3.amazonaws.com/jlcAcademyImg1Blur.png",
      },
      {
        disp: "https://portfolio-fin.s3.amazonaws.com/jlcAcademyImg4.png",
        blur: "https://portfolio-fin.s3.amazonaws.com/jlcAcademyImg4Blur.png",
      },
      {
        disp: "https://portfolio-fin.s3.amazonaws.com/jlcAcademyImg3.png",
        blur: "https://portfolio-fin.s3.amazonaws.com/jlcAcademyImg3Blur.png",
      },
    ],
    summary: [
      "JLC Academy is an educational platform where middle school to high school students can come together to get updated on homework and other news related to the program.",
      "The web application displays simple and appealing UI for students to engage in. In addition, the site provides a simple pomodoro timer to keep students focused and accountable to their work. Since launching of the site, the amount of homework completed by a student increased from merely 42% to 95% and a student’s average grade by 12% in a span of 2 weeks.",
    ],
    history: [
      "Jesus Love Church began the Saturday school for students in the summer of 2020. The program was created to help students reach their full academic potential.",
      "Teachers assisted the students with standardized tests as well as school subjects varying from math, reading, and writing. Though the brand-new program was created with little to no funding or planning, it proved to make drastic impacts on the students’ performances.",
    ],
    problem: [
      "The Saturday school program went smoothly during the summer. However, when the new school year started for the students, their performances in the program suffered. It was suspected the students were not able to balance their schoolwork along with the Saturday school work.",
      "After a couple of weeks, the teachers came to realize the reason the students were performing poorly was because they were forgetting the homework and topics they were assigned during the week. After all, they were reminded once a week and expected to remember.",
    ],
    myRole: [
      "As one of the teachers, I saw this opportunity to use my programming skill set to use. Thus, JLCAcademy was born! The application is simple: it provides a platform for teachers to post reminders such as homework or tests coming up for the program. The students are then able to interact with the posts by liking or commenting any comments or questions.",
      "In addition, the platform also provides a pomodoro timer. As a firm believer of the method, the timer was created to introduce the students to the method. That way, they’re able to get the most out of their time studying.",
    ],
    impact: [
      "Since the launch of the site, the homework completion of the students increased from 42% to 95% in a span of 2 weeks. The average grade for a student increased by 12% during the program.",
      "Moreover, the students said they experiences the benefits of the pomodoro method as they were able to focus and not burnout during study sessions.",
    ],
    technologies: [
      {
        tech: "React",
        desc: "Optimal front-end framework for easy implementation and maintainability",
      },
      {
        tech: "Redux",
        desc: "Global state manager for simpler readability and maintenance",
      },
      {
        tech: "NodeJS",
        desc: "Effortless method of developing fast web servers for the project",
      },
      {
        tech: "ExpressJS",
        desc: "Minimal framework for NodeJS that provides great performance as well as scalability",
      },
      {
        tech: "MongoDB",
        desc: "Great database for storing and mutating undemanding data sets",
      },
      {
        tech: "Mongoose",
        desc: "No-brainer pair for MongoDB for seamless data management and schema validation",
      },
      {
        tech: "Axios",
        desc: "Exceptional library for making API calls as it allows HTTP request interception",
      },
      {
        tech: "SCSS",
        desc: "Fabulous way of styling the application as it provides extra functions for great maintainability and readability",
      },
      {
        tech: "RESTful API",
        desc: "Used to allow client and the server to evolve individually",
      },
      {
        tech: "Netlify",
        desc: "Amazing platform to host the client side of application - Avoided hosting client on Heroku, as Heroku's IP address evolves based on activity of site, which produces abysmal rendering times",
      },
      {
        tech: "Heroku",
        desc: "Used to host server side of application - Simple method of creating a server that runs 24/7",
      },
    ],
    warning:
      "If you would like to test the website, please feel free use the following credentials: User: guest@jlcacademy.com | Password: guest123",
  },
];

export const about: IAbout[] = [
  {
    imgsCrop: {
      disp: "https://portfolio-fin.s3.amazonaws.com/aboutImg1Crop.png",
      blur: "https://portfolio-fin.s3.amazonaws.com/aboutImg1CropBlur.png",
    },
    imgsReg: {
      disp: "https://portfolio-fin.s3.amazonaws.com/aboutImg1.png",
      blur: "https://portfolio-fin.s3.amazonaws.com/aboutImg1Blur.png",
    },
    section: "Education",
    text: "I'm a Temple University graduate in biochemistry. As much as I loved the biochemical world, my interest began to gravitate toward programming post-graduation. Which ultimately led me to learn to program on my own.",
  },
  {
    imgsCrop: {
      disp: "https://portfolio-fin.s3.amazonaws.com/aboutImg2Crop.png",
      blur: "https://portfolio-fin.s3.amazonaws.com/aboutImg2CropBlur.png",
    },
    imgsReg: {
      disp: "https://portfolio-fin.s3.amazonaws.com/aboutImg2.png",
      blur: "https://portfolio-fin.s3.amazonaws.com/aboutImg2Blur.png",
    },
    section: "Leadership",
    text: "Since 2015, I've taken the role as praise team leader and president of the young adult group in my church. Through the experience, I've gained a whole new perspective of what it takes to be a leader. Most important realization was this: no matter what position you are in, keep the heart humble, as there is always room to learn from others.",
  },

  {
    imgsCrop: {
      disp: "https://portfolio-fin.s3.amazonaws.com/aboutImg3Crop.png",
      blur: "https://portfolio-fin.s3.amazonaws.com/aboutImg3CropBlur.png",
    },
    imgsReg: {
      disp: "https://portfolio-fin.s3.amazonaws.com/aboutImg3.png",
      blur: "https://portfolio-fin.s3.amazonaws.com/aboutImg3Blur.png",
    },
    section: "Ambitions",
    text: "Aside from programming, there are many things I'm addicted to: such as playing the drums and basketball, reading, and teaching. I came to understand my craftsmanship in these addictions derived from my obsession to improve. My competitive nature is what fuels me to what I do.",
  },
  {
    imgsCrop: {
      disp: "https://portfolio-fin.s3.amazonaws.com/aboutImg4Crop.png",
      blur: "https://portfolio-fin.s3.amazonaws.com/aboutImg4CropBlur.png",
    },
    imgsReg: {
      disp: "https://portfolio-fin.s3.amazonaws.com/aboutImg4.png",
      blur: "https://portfolio-fin.s3.amazonaws.com/aboutImg4Blur.png",
    },
    section: "Programming",
    text: "Ever since I've learned programming, I've never looked back. Through this skill, I am able to freely create anything I want to, bounded only by my own imagination and capabilities. The endless room for improvement this craft offers is too appealing to let go.",
  },
];

export const workExperiences: IWorkExperience[] = [
  {
    startDate: "August 2019",
    endDate: "Current",
    jobTitle: "Private Tutor",
    jobDesc:
      "Tutor and mentor students from elementary school to college level in various subjects, including chemistry, physics, advance maths, SATs, and biology.",
    company: "Independent",
    companyLocation: "North Wales, Pennsylvania",
  },
  {
    startDate: "February 2019",
    endDate: "September 2019",
    jobTitle: "Biomanufacturing Associate",
    jobDesc:
      "Perform purification steps with diverse set of chromatography systems. Ensure work is completed with compliance with approved SOP's, batch records, etc.",

    company: "Endo Pharmaceuticals",
    companyLocation: "Horsham, Pennsylvania",
  },
  {
    startDate: "January 2018",
    endDate: "August 2019",
    jobTitle: "Tutor/Teacher/Mentor",
    jobDesc:
      "Teaching and instructing students from middle school to college level in various subjects including chemistry, physics, advance maths, SATs, and biology. Evaluate students performances and adjust accordingly for optimal growth of student's knowledge.",

    company: "GO Learning Center",
    companyLocation: "Blue Bell, Pennsylvania",
  },
  {
    startDate: "March 2017",
    endDate: "August 2017",
    jobTitle: "Medial Assistant Intern",
    jobDesc:
      "Assist physicians with procedural preparations and documentations. ",

    company: "Bucks County Orthopedics",
    companyLocation: "DoylesTown/Warrington, Pennsylvania",
  },
  {
    startDate: "June 2015",
    endDate: "August 2016",
    jobTitle: "Pharmacy Technician",
    jobDesc:
      "Prescription entry and medication fills. Inform patients with surface level medication cautions and intake directions.",

    company: "CVS Pharmacy",
    companyLocation: "Hatfield, Pennsylvania",
  },
];

export const education: IEducation[] = [
  {
    education: "Bachelors in Sciences in Biochemistry",
    where: "Temple University",
    endDate: "January 2018",
  },
  {
    education: "Complete 2021 Web Dev. Bootcamp",
    where: "Udemy",
    endDate: "February 2021",
  },
  {
    education: "Understanding Typescript - 2021 ed.",
    where: "Udemy",
    endDate: "March 2021",
  },
  {
    education: "React and Typescript",
    where: "Udemy",
    endDate: "March 2021",
  },
  {
    education: "MERN Stack Front To Back",
    where: "Udemy",
    endDate: "December 2020",
  },
];




export const technologies = [
  'Typescript',
  'Javascript',
  'ReactJS',
  'NextJS',
  'Redux',
  'jQuery',
  'Git',
  'Jest',
  'Enzyme',
  'APIs',
  'JSON',
  'Ajax',
  'REST',
  'NodeJS'
]

export const technologies2 = [
  'ExpressJS',
  'MongoDB',
  'Mongoose',
  'Firebase',
  'Amazon S3',
  'Netlify',
  'Heroku',
  'CSS',
  'SCSS/SASS',
  'TailwindCSS',
  'Styled-Components',
  'Framer-motion'
]