'use client'

import { Button } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { IconType } from 'react-icons'

export interface LinkButtonProps {
  text: string
  url: string
  // TOOD: figure out types
  variant?: 'outline' | 'solid' | 'ghost' | 'subtle' | 'surface' | 'plain'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  icon?: ReactElement<IconType>
}

export const LinkButton = ({
  text,
  url,
  variant,
  size,
  icon
}: LinkButtonProps) => {
  const handleClick = (url: string) => {
    window?.open(url, '_blank')
  }

  return (
    <Button
      mx={2}
      size={size ?? 'xs'}
      onClick={() => handleClick(url)}
      variant={variant ?? 'outline'}>
      {icon} {text}
    </Button>
  )
}
