import { FaJava, FaPython, FaVuejs } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import {
  SiHtml5,
  SiJavascript,
  SiLatex,
  SiNunjucks,
  SiPhp,
  SiTypescript
} from 'react-icons/si'

export const langMappings = {
  python: <FaPython />,
  typescript: <SiTypescript />,
  javascript: <SiJavascript />,
  java: <FaJava />,
  go: <FaGolang />,
  vue: <FaVuejs />,
  nunjucks: <SiNunjucks />,
  php: <SiPhp />,
  tex: <SiLatex />,
  html: <SiHtml5 />
}

export const excludedProjects = new Set([
  'gojo',
  'dsa-solutions',
  'dsa',
  'collinkleest-cv',
  'collinkleest'
])

export const priorityProjects = new Set([
  'collinkleest.com',
  'liteproxy',
  'HAXcms',
  'fpl.app',
  'cf-ddns',
  'JavaFit'
])
