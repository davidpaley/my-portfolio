module.exports = {
  siteTitle: "Hi, I'm David!",
  siteDescription: `David Paley's Portfolio`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'David Paley',
  twitterUsername: 'PaleyDavid',
  githubUsername: 'davidpaley',
  authorAvatar: '/images/avatar.jpg',
  authorDescription: `I describe myself as a proactive Software Engineer, someone who is 
  consistently growing and takes the time to keep learning every day.<br />
  I've been working remotely since I finished university in 2014, working for different companies
  from different places (United States, Australia, Spain, etc).<br />My strongest field is the 
  Frontend side, however, I also work
  in the backend, currently with Node. I have been working with React JS since 2014, 
  my main motivations are the 
  performance improvements, clean code, serverless tools, among others.`,
  skills: [
    {
      name: 'Javascript',
      level: 95,
      description: `
        <ul>
          <li>More than 8 years of experience</li>
          <li>I love to use ECMAScript and be constantly learning</li>
        </ul> 
      `
    },
    {
      name: 'React',
      level: 90,
      description: `
      <ul>
        <li>More than 5 years of experience</li>
        <li>Redux</li>
        <li>React Lazy with Suspense</li>
        <li>I have used Next js for SSR</li>
        <li>I have used Gatsby for static rendering</li>
        <li>Configuration tools as Webpack, Babel, Rollup</li>
      </ul> 
      `
    },
    {
      name: 'HTML/CSS',
      level: 70,
      description: `
      <ul>
        <li>SASS</li>
        <li>Flexbox</li>
        <li>Grid Layouts</li>
        <li>CSS Modules</li>
        <li>Styled components</li>
      </ul> 
      `
    },
    {
      name: 'Web Performance',
      level: 85,
      description: `
      <ul>
        <li>Experience analyzing pages and diagnose what to do to improve the performance</li>  
        <li>Code splitting</li>
        <li>Server Side Rendering and static rendering</li>
        <li>Progressive web apps</li>
        <li>Workbox for Service Workers</li>
        <li>Image optimization</li>
      </ul> 
      `
    },
    {
      name: 'Responsive Design',
      level: 80,
      description: `
      <ul>
        <li>Mobile First Design</li>  
        <li>Media queries</li>
      </ul> 
      `
    },
    {
      name: 'Automated Tests',
      level: 73,
      description: `
      <ul>
        <li>Jest</li>  
        <li>Enzyme</li>
      </ul> 
      `
    },
    {
      name: 'Typescript',
      level: 70,
      description: `
      <ul>
        <li>Experience using Typescript with React</li>  
      </ul> 
      `
    },
    {
      name: 'AWS',
      level: 50,
      description: `
      <ul>
        <li>Configure CDN</li>
        <li>S3</li>
        <li>Deploy a React App</li>
      </ul> 
      `
    },
    {
      name: 'Git',
      level: 77,
    },
    {
      name: 'NodeJs',
      level: 40,
    },
    {
      name: 'SQL',
      level: 35,
    },
    {
      name: 'NoSQL databases',
      level: 30,
    },
    {
      name: 'Angular',
      level: 60,
    },
  ],
  jobs: [
    {
      company: 'AIME',
      begin: {
        month: 'Mar',
        year: '2018',
      },
      occupation: 'Full Stack Developer',
      description:
        `<p>
          I work for the Australian non profit remotely.
          I develop with React js in the frontend side and with Node js in the backend. I also work 
          making the designs possible with HTML and CSS (working with SASS, CSS Grid, Flexbox, etc).
        </p>`
    },
    {
      company: 'Freelance',
      begin: {
        month: 'Jun',
        year: '2016',
      },
      duration: '2 years',
      occupation: 'Freelance',
      description:
        `<p>
          Working as Freelance I participated in several projects. Some of them are: <br />
          - Helping building the TMP website. Application to manage tasks and track time on a 
          collaborative environment. <br />- I developed a mobile App to implement in Uruguay, in order to 
          promote some discounts for Direct TV. The application has a list of promotions that you have 
          if you are subscribed with Direct TV, sorted by location and explained in detail.
        </p>`
    },
    {
      company: 'Strands',
      begin: {
        month: 'Mar',
        year: '2015',
      },
      duration: '3 years',
      occupation: 'Frontend Developer',
      description:
        `<p>
          Built the Backoffice Product of PFM, used by the banks for customize their campaigns. 
          Worked for the MoneyStrands project, developing frontend requirements. The first year I was 
          responsible for the development of new features of the Strands Products: Recommendation 
          Widgets, Clients Segmentations, Mail Service Campaigns for Web Retailers, maintenance of 
          the Strands Dashboard. In the frontend with Javascript and in backend using Python, Django.
        </p>`
    },
    {
      company: 'Citibank',
      begin: {
        month: 'Oct',
        year: '2012',
      },
      duration: '2 years and 5 months',
      occupation: 'Full Stack Developer',
      description:
        `<p>
          I was present in the full development life-cycle. Successfully built and maintained a 
          variety of customer facing applications.Coded new modules in line with pre-agreed technical 
          specifications. Worked closely with my partners during the tests in the UAT (User Acceptance 
          Testing) environment and in the Production environment, to ensure a timely and successful 
          outcome.
        </p>`
    },
    /* ... */
  ],
  social: {
    twitter: 'https://twitter.com/PaleyDavid',
    linkedin: 'https://www.linkedin.com/in/davidpaley11/',
    github: 'https://github.com/davidpaley',
    email: 'david.paleyy@gmail.com',
  },
  siteUrl: 'https://portfolio.davidpaley.now.sh/',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'static/images/avatar.jpg',
  headerLinks: [
    {
      label: 'David Paley',
      url: '/',
    },
  ],
}
