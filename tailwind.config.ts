import plugin from 'tailwindcss/plugin'
import type { Config, PluginAPI } from 'tailwindcss/types/config'

import { COLORS } from './src/constants/color.constants'

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      screens: {
        lg: { max: '1999.98px' },
        md: { max: '991.98px' },
        sm: { max: '767.98px' },
        xs: { max: '479.98px' }
      },
      boxShadow: {
        custom: '0 8px 25px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.h0': {
          fontWeight: '700',
          fontSize: '48px',
          letterSpacing: '-0.05em'
        },
        '.h1': {
          fontWeight: '700',
          fontSize: '32px',
          lineHeight: '40px',
          letterSpacing: '-0.05em'
        },
        '.h1-1': {
          fontWeight: '700',
          fontSize: '32px',
          letterSpacing: '-0.05em'
        },
        '.h2': {
          fontWeight: '700',
          fontSize: '21px',
          letterSpacing: '-0.05em',
          lineHeight: '35px'
        },
        '.h3': {
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '-0.05em'
        },
        '.h4': {
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        },
        '.subtitle1': {
          fontWeight: '500',
          fontSize: '21px',
          lineHeight: '35px',
          letterSpacing: '-0.05em'
        },
        '.subtitle2': {
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '-0.05em'
        },
        '.subtitle3': {
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '-0.05em'
        },
        '.subtitle2-strikethrough': {
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '-0.05em',
          textDecoration: 'line-through'
        },
        '.bttn': {
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '-0.05em',
          textTransform: 'uppercase'
        },
        '.cost-captial': {
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '30px',
          letterSpacing: '-0.05em',
          textTransform: 'uppercase'
        },
        '.cost-captial1': {
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '-0.05em',
          textTransform: 'uppercase'
        },
        '.body1': {
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        },
        '.body1-1': {
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        },
        '.body1-1-txt': {
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '-0.05em'
        },
        '.body2': {
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        },
        '.body2-1': {
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        },
        '.body3-underline': {
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em',
          textDecoration: 'underline'
        },
        '.body4-underline': {
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em',
          textDecoration: 'underline'
        },
        '.body4-capital': {
          fontWeight: '500',
          fontSize: '12px',
          lineHeight: '20px',
          letterSpacing: '-0.05em'
        },
        '.caption': {
          fontWeight: '500',
          fontSize: '12px',
          lineHeight: '20px',
          letterSpacing: '-0.05em'
        },
        '.caption1': {
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '20px',
          letterSpacing: '-0.05em'
        },
        '.link-underline': {
          fontWeight: '500',
          fontSize: '12px',
          lineHeight: '20px',
          letterSpacing: '-0.05em'
        },
        '.caption-capital': {
          fontWeight: '500',
          fontSize: '8px',
          lineHeight: '10px',
          letterSpacing: '-0.05em',
          textTransform: 'uppercase'
        },
        '.caption-capital1': {
          fontWeight: '500',
          fontSize: '10px',
          lineHeight: '10px',
          letterSpacing: '-0.05em'
        },
        '.container': {
          maxWidth: '87.5rem',
          margin: '0px auto',
          padding: '0px 1.25rem'
        },
        '.wrapper': {
          minHeight: '100vh',
          flexDirection: 'column',
          display: 'flex',
          overflow: 'hidden'
        }
      })
    }),
    plugin(({ addComponents }: PluginAPI) => {
      addComponents({
        '.btn-normal-state': {
          width: '100%',
          color: COLORS.white,
          backgroundColor: COLORS.black,
          minHeight: '3.125rem'
        },
        '.btn-hover': {
          width: '100%',
          color: COLORS.darkGray,
          backgroundColor: COLORS.black,
          minHeight: '3.125rem'
        },
        '.btn-disabled': {
          width: '100%',
          color: COLORS.darkGray,
          backgroundColor: COLORS.gray,
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '-0.05em',
          padding: '10px 98px'
        },
        '.btn-border-normal-state': {
          width: '100%',
          color: COLORS.black,
          backgroundColor: COLORS.white,
          border: '1px solid',
          minHeight: '3.125rem'
        },
        '.btn-border-hover': {
          width: '100%',
          color: COLORS.darkGray,
          backgroundColor: COLORS.white,
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '-0.05em',
          padding: '10px 98px',
          boxShadow: '0 0 0 1px black'
        },
        '.btn-border-disabled': {
          width: '100%',
          color: COLORS.gray,
          backgroundColor: COLORS.white,
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '30px',
          letterSpacing: '-0.05em',
          padding: '10px 98px',
          boxShadow: `0 0 0 1px ${COLORS.gray1}`
        },
        '.btn-big-normal-state': {
          width: '100%',
          color: COLORS.white,
          backgroundColor: COLORS.red,
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
          padding: '25px 96px',
          textTransform: 'uppercase'
        },
        '.btn-big-hover': {
          width: '100%',
          color: COLORS.gray,
          backgroundColor: COLORS.red,
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
          padding: '25px 96px',
          textTransform: 'uppercase'
        },
        '.btn-big-disabled': {
          width: '100%',
          color: COLORS.darkGray,
          backgroundColor: COLORS.gray,
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
          padding: '25px 96px',
          textTransform: 'uppercase'
        },
        '.btn-big-border-normal-state': {
          width: '100%',
          color: COLORS.red,
          backgroundColor: COLORS.white,
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
          padding: '25px 96px',
          textTransform: 'uppercase',
          boxShadow: `0 0 0 1px ${COLORS.red}`
        },
        '.btn-big-border-hover': {
          width: '100%',
          color: COLORS.darkGray,
          backgroundColor: COLORS.white,
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
          padding: '25px 96px',
          textTransform: 'uppercase',
          boxShadow: `0 0 0 1px ${COLORS.red}`
        },
        '.btn-big-border-disabled': {
          width: '100%',
          color: COLORS.darkGray,
          backgroundColor: COLORS.white,
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
          padding: '25px 96px',
          textTransform: 'uppercase',
          boxShadow: `0 0 0 1px ${COLORS.gray1}`
        },
        '.btn-size-normal-state': {
          width: '50px',
          height: '50px',
          color: COLORS.black,
          backgroundColor: COLORS.lightGray,
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        },
        '.btn-size-hover': {
          width: '50px',
          height: '50px',
          color: COLORS.darkGray,
          backgroundColor: COLORS.lightGray,
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        },
        '.btn-size-disabled': {
          width: '50px',
          height: '50px',
          color: COLORS.gray,
          backgroundColor: COLORS.lightGray,
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        },
        '.btn-size-active': {
          width: '50px',
          height: '50px',
          color: COLORS.lightGray,
          backgroundColor: COLORS.black,
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '25px',
          letterSpacing: '-0.05em'
        }
      })
    })
  ]
}
export default config
