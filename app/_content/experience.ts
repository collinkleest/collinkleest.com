import { IExperience } from '../_types'

export const experience: IExperience = {
  title: 'Experience',
  experienceBlocks: [
    {
      companyName: 'Vanguard',
      timeline: 'Aug 2021 - Present',
      roles: [
        { roleTitle: 'Tech Lead', roleBullets: ['Leading Software Team'] },
        {
          roleTitle:
            'Rotation 3: Full Stack Developer in Tech Leadership Program ',
          roleBullets: [
            'Implemented micro frontend architecture using module federation plugin, enhancing modularity and scalability for portfolio and fund comparison tools, managing over 20000+ portfolios.',
            'Led the development of a secure serverless portal for a Canadian site using Angular and S3 for hosting, ensuring robust security measures, and catering to the needs of over 10000 financial advisor users.',
            'Designed and implemented a data pipeline for a multi-country secure portal data lake integration using AWS Firehose and Glue ETL jobs in Python, optimizing data flow and processing for thousands of data events firing each day.'
          ]
        },
        {
          roleTitle: 'Rotation 2: Cloud Engineer - ECS Infrastructure',
          roleBullets: [
            'Supported 10000+ containerized mission-critical business applications by completing feature and escalated tickets.',
            'Contributed to making the ECS platform more stable and reliable, by reducing cloud dependencies.',
            'Engineered a cloud-native platform insights tool that helped product teams and clients reduce their ECS costs.'
          ]
        },
        {
          roleTitle:
            'Rotation 1: Application Engineer - Financial Product Team',
          roleBullets: [
            'Developed Java Rest APIs that served internal consumers, specifically APIs that delivered financial fund data. Optimized queries and algorithms to decrease response times and improve application performance.',
            'Designed and implemented cloud-native ETL jobs and event-driven microservice architecture.',
            'Performed resiliency and performance tests to ensure application stability.'
          ]
        },
        {
          roleTitle: 'Application Developer Intern',
          roleBullets: [
            'Contributed to a full-stack Angular-based College Cost Estimator web app that helps advisors and clients get an estimated cost of college for their children.',
            "Lead development of an electron application with a group of interns that manages Vanguard's community gardens."
          ]
        }
      ]
    },
    {
      companyName: 'Pfizer',
      timeline: 'Jun 2020 - Dec 2020',
      roles: [
        {
          roleTitle: 'Associate Software Engineer',
          roleBullets: [
            'Contributed to a web based micro-service data processing platform that is utilized by finance and manufacturing teams',
            'Improved data-processing services that were used by manufacturing facilities producing COVID-19 vaccinations'
          ]
        },
        {
          roleTitle: 'Software Engineer Intern',
          roleBullets: [
            'Engineered a full stack web application that dynamically updates API documentation with latest releases of a set of micro-services',
            'Designed a front-end user interface using individual React components and built out a back-end that exposes a spring boot rest API',
            'Collaborated with an intern to build a static content site for multiple teams.'
          ]
        }
      ]
    },
    {
      companyName: 'Penn State College of Information Sciences and Technology',
      timeline: 'Jan 2019 - May 2020',
      roles: [
        {
          roleTitle: 'Java Learning Assistant',
          roleBlurb:
            'Object Oriented Programming Course with Professor Shawn Smith, Penn State Director of Software Engineering',
          roleBullets: [
            'Taught a set of students fundamental object oriented programming concepts',
            'Assisted instructor with lectures, grading, and course materials.'
          ]
        },
        {
          roleTitle: 'Learning Assistant Coordinator',
          roleBullets: [
            'Managing ten learning assistants',
            'Facilitating communications to tutors.',
            'Conducting interviews on new potential teaching assistant hires.'
          ]
        },
        {
          roleTitle: 'Instructional Assistant and Lead Teaching Assistant',
          roleBlurb:
            'Security and Risk Analysis introduction course taught by Dr. Edward Glantz, PE, CISSP',
          roleBullets: [
            'Managed two new teaching assistants and oversaw their grading and strengthened their teaching methods.',
            'Enhanced course assignments and structure assisted instructor with grading and lectures.'
          ]
        }
      ]
    },
    {
      companyName: 'Rajant Coporation',
      timeline: 'May 2019 - Aug 2019',
      roles: [
        {
          roleTitle: 'Systems Engineer Intern',
          roleBlurb:
            'Rajant is a defense contractor that produces networking technology that enables secure, real-time communication',
          roleBullets: [
            'Established an API Gateway to provide centralized authentication for API’s and 115 employees.',
            'Engineered a power monitoring system, that utilizes Python on a Raspberry Pi.',
            'Analyzed a corporate network of 10-15 servers, two VPN connections, and multiple Virtual LAN’s.'
          ]
        }
      ]
    }
  ]
}
