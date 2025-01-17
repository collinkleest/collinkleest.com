import { Avatar } from '@_components'
import { IExperience } from '@_types'
import { FaFileCode, FaServer } from 'react-icons/fa'

export const experience: IExperience = {
  title: 'Experience',
  experienceBlocks: [
    {
      companyName: 'Vanguard',
      timeline: 'Aug 2021 - Present',
      avatar: <Avatar src={'images/vanguard.png'} />,
      roles: [
        {
          roleTitle: 'Software Technical Lead - Americas FAS',
          roleTimeline: 'Aug 2023 - Present',
          avatar: <FaServer />,
          roleBullets: [
            'Oversee the technical delivery of a full stack team using AEM and Angular, managing Vanguard Americas FAS secure and public sites.',
            'Review pull requests, contribute to system architecture and implementation, develop new features and tools, and address security vulnerabilities.',
            'Lead strategic planning and team upskilling initiatives to ensure high-quality, secure software delivery.'
          ]
        },
        {
          roleTitle: 'Software Engineer - Technology Leadership Program',
          roleTimeline: 'Aug 2021 - Aug 2023',
          roleBullets: [
            'Enhanced Scalability and Modularity: Implemented micro frontend architecture using module federation, scaling portfolio and fund comparison tools for 20,000+ portfolios.',
            'Developed Secure Portals: Led development of serverless portals for Canadian financial advisors and multi-country data lake integration, leveraging Angular, AWS Firehose, Glue, and Python for robust security and optimized data processing.',
            'Optimized Mission-Critical Systems: Supported 10,000+ containerized business applications, improving ECS platform reliability, reducing cloud dependencies, and engineering cost-saving insights tools.',
            'Improved API Performance: Built and optimized Java REST APIs for financial fund data, enhancing response times, stability, and overall application performance.',
            'Engineered Cloud-Native Solutions: Designed event-driven microservice architectures and cloud-native ETL jobs, performing resiliency and performance tests to ensure reliability.'
          ]
        },
        {
          roleTitle: 'Application Developer Intern',
          roleTimeline: 'Jun 2021 - Aug 2021',
          avatar: <FaFileCode />,
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
      avatar: <Avatar src={'images/pfizer.jpg'} />,
      roles: [
        {
          roleTitle: 'Associate Software Engineer',
          roleTimeline: 'Aug 2020 - Dec 2020',
          roleBullets: [
            'Contributed to a web based micro-service data processing platform that is utilized by finance and manufacturing teams',
            'Improved data-processing services that were used by manufacturing facilities producing COVID-19 vaccinations'
          ]
        },
        {
          roleTitle: 'Software Engineer Intern',
          roleTimeline: 'Jun 2020 - Aug 2020',
          avatar: <FaFileCode />,
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
      avatar: <Avatar src={'images/pennstate.png'} />,
      roles: [
        {
          roleTitle: 'Java Learning Assistant',
          roleBlurb:
            'Object Oriented Programming Course with Professor Shawn Smith, Penn State Director of Software Engineering',
          roleTimeline: 'Jan 2020 - May 2020',
          roleBullets: [
            'Taught a set of students fundamental object oriented programming concepts',
            'Assisted instructor with lectures, grading, and course materials.'
          ]
        },
        {
          roleTitle: 'Learning Assistant Coordinator',
          roleTimeline: 'Jan 2020 - May 2020',
          roleBullets: [
            'Managing ten learning assistants',
            'Facilitating communications to tutors.',
            'Conducting interviews on new potential teaching assistant hires.'
          ]
        },
        {
          roleTitle: 'Instructional Assistant and Lead Teaching Assistant',
          roleTimeline: 'Jan 2019 - Dec 2019',
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
      avatar: <Avatar src={'images/rajant.png'} />,
      roles: [
        {
          roleTitle: 'Systems Engineer Intern',
          roleTimeline: 'May 2019 - Aug 2019',
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
