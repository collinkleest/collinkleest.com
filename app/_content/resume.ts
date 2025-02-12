import { IResume } from '../_types/resume.types'

export const resume: IResume = {
  heading: 'Resume',
  mainContentRichText: `My resume is built in LaTex and is from a template called
        <a href="https://github.com/posquit0/Awesome-CV">
          {' '}
          <b>Awesome-CV</b>
        </a>
        . My resume is available for download in PDF format or you can view it
        in a new tab.`,
  viewInTabBtnText: 'View resume in new tab',
  downloadBtnText: 'Download Resume PDF',
  resumeHref: 'docs/resume.pdf'
}
