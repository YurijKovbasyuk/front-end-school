export const theme = Object.freeze({
  colors: {
    textMain: '#111111',
    textSecond: '#202020',
    textLink: '#120bbcc4',
    hover: '#0700b4',
    placeholder: 'rgba(17, 17, 17, 0.6)',

    bgMain: '#cafcff',
    bgSecond: '#fffcff',

    dark: '#181C27',
    shadow: 'rgba(49, 21, 4, 0.17)',
  },
  spacing: value => `${4 * value}px`,
  header: {
    mobileHeight: '74px',
    tabletAndDesktopHeight: '88px',
  },
  animation: {
    cubicBezier: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
