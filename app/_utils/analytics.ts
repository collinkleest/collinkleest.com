import { sendGAEvent } from '@next/third-parties/google'

export const sentAnalyticEvent = (
  value: object,
  type = 'event',
  action = 'buttonClicked'
) => {
  sendGAEvent(type, action, value)
}
