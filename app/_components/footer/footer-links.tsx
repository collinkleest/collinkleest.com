import { IFooterLink } from '@_types'
import { Box } from '@chakra-ui/react'

export const FooterLinks = ({
  footerLinks
}: {
  footerLinks: IFooterLink[]
}) => {
  return (
    <Box display={'flex'} gap={4}>
      {footerLinks.map(({ key, href, target, title, icon }: IFooterLink) => {
        return (
          <a key={key} href={href} target={target ?? '_blank'} title={title}>
            {icon}
          </a>
        )
      })}
    </Box>
  )
}
