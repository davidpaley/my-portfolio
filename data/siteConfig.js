module.exports = {
  siteTitle: "Hi, I'm David!",
  siteDescription: `David Paley's Portfolio`,
  keyWords: ["gatsbyjs", "react", "curriculum"],
  authorName: "David Paley",
  twitterUsername: "PaleyDavid",
  githubUsername: "davidpaley",
  authorAvatar: "/images/avatar.jpg",
  authorDescription: `I describe myself as a proactive Software Engineer, trying to make the world a better place through building quality software.
  <br />I've been working remotely since I finished university in 2014, working for different companies from different parts of the world (United States, Australia, Spain, etc).
  <br />With more than 10 years of experience writing code, I feel like I have been able to achieve my goal of becoming an expert in JavaScript, however, my journey is just beginning.
  That is why I am constantly reading and learning new stuff, which is an enjoyable game for me.`,
  skills: [
    {
      name: "Javascript / Typescript",
      level: 95,
    },
    {
      name: "React",
      level: 90,
      description: `
      <ul>
        <li>Redux</li>
        <li>NextJS</li>
        <li>Configuration tools as Webpack, Babel, Rollup, eslint, etc</li>
      </ul> 
      `,
    },
    {
      name: "NodeJs",
      level: 85,
    },
    {
      name: "Web Performance",
      level: 85,
      description: `
      <ul>
        <li>Improve Web Vitals</li>  
        <li>Server Side and Static rendering</li>
        <li>Code splitting</li>
        <li>Progressive web apps</li>
        <li>Service Workers</li>
        <li>Image optimization</li>
      </ul> 
      `,
    },
    {
      name: "Automated Tests",
      level: 83,
      description: `
      <ul>
        <li>Jest</li>  
        <li>React Testing Library</li>
        <li>Cypress</li>
      </ul> 
      `,
    },
    {
      name: "HTML/CSS",
      level: 80,
      description: `
      <ul>
        <li>SASS</li>
        <li>Flexbox</li>
        <li>Grid Layouts</li>
        <li>CSS Modules</li>
        <li>Styled components</li>
      </ul> 
      `,
    },
    {
      name: "Git",
      level: 77,
    },
    {
      name: "Responsive Design",
      level: 75,
      description: `
      <ul>
        <li>Mobile First Design</li>  
        <li>Media queries</li>
      </ul> 
      `,
    },
    {
      name: "AWS",
      level: 55,
      description: `
      <ul>
        <li>Cloudfront</li>
        <li>S3</li>
        <li>Lambda Functions</li>
        <li>Amazon Elastic Container Service</li>
      </ul> 
      `,
    },
    {
      name: "SQL",
      level: 45,
    },
    {
      name: "NoSQL databases",
      level: 30,
    },
  ],
  jobs: [
    {
      company: "Invitae - JETBRIDGE",
      begin: {
        month: "August",
        year: "2021",
      },
      occupation: "Full Stack Engineer",
      description: `<p>
          Work for the medical genetic testing company, <a href="https://www.invitae.com/en" target="_blank">Invitae</a>, making their new LIMS  (Laboratory Information Management Systems) platform possible.
        </p>`,
    },
    {
      company: "CITY Furniture",
      begin: {
        month: "Jul",
        year: "2020",
      },
      duration: "1 year, 3 months",
      occupation: "Full Stack Engineer",
      description: `<p>
          Worked for Cityfurniture, the main furniture e-commerce company of Florida, United States.
          My responsibilities include improving the site's performance, making decisions about enhancing our architecture,
          best practices and work in general (performance culture, create tools to help the developers to
          improve the development proccess). I worked with Next js in the frontend (React), Node js,
          Vercel, AWS.
        </p>`,
    },
    {
      company: "AIME",
      begin: {
        month: "Mar",
        year: "2018",
      },
      duration: "2 years",
      occupation: "Full Stack Developer",
      description: `<p>
          I work for the Australian non profit remotely.
          I develop with React js in the frontend side and with Node js in the backend. I also work 
          making the designs possible with HTML and CSS (working with SASS, CSS Grid, Flexbox, etc).
        </p>`,
    },
    {
      company: "Freelance",
      begin: {
        month: "Jun",
        year: "2016",
      },
      duration: "2 years",
      occupation: "Freelance",
      description: `<p>
          Working as Freelance I participated in several projects. Some of them are: <br />
          - Helping building the TMP website. Application to manage tasks and track time on a 
          collaborative environment. <br />- I developed a mobile App to implement in Uruguay, in order to 
          promote some discounts for Direct TV. The application has a list of promotions that you have 
          if you are subscribed with Direct TV, sorted by location and explained in detail.
        </p>`,
    },
    {
      company: "Strands",
      begin: {
        month: "Mar",
        year: "2015",
      },
      duration: "3 years",
      occupation: "Frontend Developer",
      description: `<p>
          Built the Backoffice Product of PFM, used by the banks for customize their campaigns. 
          Worked for the MoneyStrands project, developing frontend requirements. The first year I was 
          responsible for the development of new features of the Strands Products: Recommendation 
          Widgets, Clients Segmentations, Mail Service Campaigns for Web Retailers, maintenance of 
          the Strands Dashboard. In the frontend with Javascript and in backend using Python, Django.
        </p>`,
    },
    {
      company: "Citibank",
      begin: {
        month: "Oct",
        year: "2012",
      },
      duration: "2 years and 5 months",
      occupation: "Full Stack Developer",
      description: `<p>
          I was present in the full development life-cycle. Successfully built and maintained a 
          variety of customer facing applications.Coded new modules in line with pre-agreed technical 
          specifications. Worked closely with my partners during the tests in the UAT (User Acceptance 
          Testing) environment and in the Production environment, to ensure a timely and successful 
          outcome.
        </p>`,
    },
  ],
  social: {
    twitter: "https://twitter.com/PaleyDavid",
    linkedin: "https://www.linkedin.com/in/davidpaley11/",
    github: "https://github.com/davidpaley",
    email: "david.paleyy@gmail.com",
  },
  siteUrl: "https://portfolio.davidpaley.now.sh/",
  pathPrefix: "/gatsby-starter-cv", // Note: it must *not* have a trailing slash.
  siteCover: "/images/cover.jpg",
  googleAnalyticsId: "UA-000000000-1",
  background_color: "#ffffff",
  theme_color: "#25303B",
  display: "minimal-ui",
  icon: "static/images/avatar.jpg",
  headerLinks: [
    {
      label: "David Paley",
      url: "/",
    },
  ],
};
