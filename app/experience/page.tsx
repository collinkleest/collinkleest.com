import { Fragment } from 'react'
import content from '../_content/content'
import { IExperienceBlock, IExperienceRole } from '../_types'

export default function Page() {
  return (
    <div className="container mx-auto py-4 font-mono">
      <h1 className="font-bold text-2xl  my-2">Experience</h1>
      {content.experience.experienceBlocks.map(
        (experienceBlock: IExperienceBlock) => {
          return (
            <Fragment key={experienceBlock.companyName}>
              <h2 className="font-bold text-xl">
                {experienceBlock.companyName}
              </h2>
              <p className="text-sm text-slate-500">
                {experienceBlock.timeline}
              </p>
              {experienceBlock.roles.map((role: IExperienceRole) => {
                return (
                  <Fragment key={role.roleTitle}>
                    <p className="text-sm font-bold">{role.roleTitle}</p>
                    <p className="text-sm italic">{role.roleBlurb}</p>
                    <ul className="ml-3 list-disc list-inside">
                      {role.roleBullets.map(
                        (roleBullet: string, index: number) => {
                          return (
                            <li key={index} className="text-sm">
                              {roleBullet}
                            </li>
                          )
                        }
                      )}
                    </ul>
                  </Fragment>
                )
              })}
            </Fragment>
          )
        }
      )}
    </div>
  )
}
