import { sendGAEvent } from '@next/third-parties/google'

export interface ICallToActionEvent {
  ctaTitle: string
  ctaText?: string
  ctaHref?: string
}

export const sentAnalyticEvent = (
  value: object,
  type = 'event',
  action = 'buttonClicked'
) => {
  sendGAEvent(type, action, value)
}

export const sendCallToActionAnalyticEvent = (
  event: ICallToActionEvent,
  action = 'buttonClicked'
) => {
  sentAnalyticEvent(event, action)
}
