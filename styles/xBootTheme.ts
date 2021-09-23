import { darken } from "polished"
import { defaultTheme } from "@xstyled/styled-components"

/**
 * WIP : ThemeProvider (@xstyled/styled-components)向けテーマ
 **/

export const xBootTheme = {
  ...defaultTheme,
  fonts: {
    sansSerif: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    monospace: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;'
  },

  fontSizes: {
    base: '16px',
    small: '.875em'
  },

  fontWeights: {
    bold: '700',
    bolder: 'bolder'
  },
  
  colors: {
    white: "#ffffff",
    dark: "#212529",
    primary: "#0d6efd",
    light: "#f8f9fa",
    markBg: "#fcf8e3",
    link: "#0d6efd",
    linkHover: darken(0.15, "#0d6efd")
  },

  space: {
    markPadding: '.2em'
  }
}