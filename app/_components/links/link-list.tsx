import { ILinkButton } from '@_types'
import { LinkButton } from './link-button'

export const LinkList = ({ links }: { links: ILinkButton[] }) => {
  return (
    <>
      {links.map((link: ILinkButton) => {
        return (
          <LinkButton
            key={link.text}
            url={link.url}
            text={link.text}
            icon={link.icon}
          />
        )
      })}
    </>
  )
}
