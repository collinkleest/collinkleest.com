export const openLink = (
  url: string,
  _target?: string,
  _features?: string
): void => {
  if (window) {
    window.open(url, _target ?? '_blank', _features)
  } else {
    console.error('window is not defined')
  }
}
