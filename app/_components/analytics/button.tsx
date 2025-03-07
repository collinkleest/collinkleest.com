import { sendCallToActionAnalyticEvent } from '@_utils'
import { Button, ButtonProps } from '@chakra-ui/react'

export interface AnalyticButtonProps extends ButtonProps {
  ctaTitle: string
  ctaText?: string
  ctaHref?: string
}

export const AnalyticButton = (props: AnalyticButtonProps) => {
  return (
    <Button
      {...props}
      onClick={() =>
        sendCallToActionAnalyticEvent({
          ctaTitle: props.ctaTitle,
          ctaText: props.ctaText ?? props.children.toString(),
          ctaHref: props.ctaHref
        })
      }>
      {props.children}
    </Button>
  )
}
