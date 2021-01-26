import { Breakpoint, mediaQuery } from './responsive.utils'

export const Size = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  small: 'small',
}

export const DefaultScale = {
  [Size.h1]: '1.383rem',
  [Size.h2]: '1.296rem',
  [Size.h3]: '1.215rem',
  [Size.h4]: '1.138rem',
  [Size.h5]: '1.067rem',
  [Size.small]: '0.937rem',
}

export const ResponsiveScales = {
  [Breakpoint.md]: {
    [Size.h1]: '1.802rem',
    [Size.h2]: '1.602rem',
    [Size.h3]: '1.424rem',
    [Size.h4]: '1.266rem',
    [Size.h5]: '1.125rem',
    [Size.small]: '0.889rem',
  },
}

export const getTypeScaleStyles = scale =>
  Object.entries(scale)
    .map(
      ([selector, size]) =>
        `
          ${selector} {
            font-size: ${size};
          }
        `,
    )
    .join('\n')

export const getResponseTypeScaleStyles = (breakpoint, scale) => `
  ${mediaQuery(breakpoint)} {
    ${getTypeScaleStyles(scale)}
  }
`

export const getResponseTypeStyle = size => `
  font-size: ${DefaultScale[size]};

  ${Object.entries(ResponsiveScales).map(
    ([breakpoint, sizes]) => `
      ${mediaQuery(breakpoint)} {
        font-size: ${sizes[size]};
      }
    `,
  )}
`
