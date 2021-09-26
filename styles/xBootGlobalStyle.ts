import { css } from "styled-components";
import { th } from "@xstyled/styled-components"

/**
 * Global Style (styled-component) に埋め込む事を想定したスタイル
 * Bootstrap のものを引用
 * 
 * thを使用しているので、xBootTheme を ThemeProvider(@xstyled/styled-components)に適用する
 */
export const xBootGlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&family=Source+Code+Pro&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: ${th.fontSize('base')};
  }

  body {
    margin: 0;
    font-family: ${th.font("notoSans")};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${th.color('dark')};
    background-color: ${th.color('white')};
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  h2 {
    font-size: calc(1.325rem + .9vw);
  }
  h3 {
    font-size: calc(1.3rem + .6vw);
  }
  h4 {
    font-size: calc(1.275rem + .3vw);
  }
  h5 {
    font-size: 1.25rem;
  }
  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  /* 略語要素 */
  abbr[title],
  abbr[data-bs-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    text-decoration-skip-ink: none;
  }

  /* 住所 */
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  /* リスト*/
  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  /* 定義の説明 */
  dt {
    font-weight: ${th.fontWeight('bold')};
  }

  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }

  /* 引用 */
  blockquote {
    margin: 0 0 1rem;
  }

  b, strong {
    font-weight: ${th.fontWeight('bolder')};
  }

  small {
    fonr-size: ${th.fontSize('small')}
  }

  mark {
    padding: ${th.space('markPadding')};
    background-color: ${th.color('markBg')};
  }

  sub,
  sup {
    position: relative;
    /* @include font-size($sub-sup-font-size); */
    line-height: 0;
    vertical-align: baseline;
  }

  sub { bottom: -.25em; }
  sup { top: -.5em; }
  
  // Links
  a {
    color: ${th.color("link")};
    text-decoration: underline;

    &:hover {
      color: ${th.color("linkHover")};
      text-decoration: underline;
    }
  }

  a:not([href]):not([class]) {
    &,
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ${th.font("sourceCode")};
    unicode-bidi: bidi-override;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    color: ${th.color("dark")};

    code {
      font-size: inherit;
      color: inherit;
      word-break: normal;
    }
  }
  
  code {
    color: ${th.color("dark")};
    word-wrap: break-word;
    a > & {
      color: inherit;
    }
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }
  
  table {
    caption-side: bottom;
    border-collapse: collapse;
  }
  
  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }
  
  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  /* フォーム */
  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: dotted 1px;
    outline: -webkit-focus-ring-color auto 5px;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    @include font-size(inherit);
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role="button"] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;

    @if $enable-button-pointers {
      &:not(:disabled) {
        cursor: pointer;
      }
    }
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: $legend-margin-bottom;
    @include font-size($legend-font-size);
    font-weight: $legend-font-weight;
    line-height: inherit;

    + * {
      clear: left;
    }
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }
  
  progress {
    vertical-align: baseline;
  }
  
  [hidden] {
    display: none !important;
  }
`