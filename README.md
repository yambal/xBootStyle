# xBootStyle
`styled-component` + `xstyled` + `Bootstrap (like)`

## 目的
- このリポジトリで提供するものは、Reactで素早くビューコンポーネントを素早く構築するための雛形、およびその知見です。
- 利用者に（比較的）モダンなスタイリング手法とカスタマイズ性を提供するのが目的です。

## 目的としていないこと
- 完成度の高いPresentational Component を提供する事は目的とはしていません

## 利用方法
- `styled-component` の [Theming](https://styled-components.com/docs/api#createglobalstyle) および [GlobalTheme](https://styled-components.com/docs/api#createglobalstyle) に従います
- `xstyled` を採用しているので Theming には [xstyled : Theme Configuration
](https://xstyled.dev/docs/theme/#customizing-the-default-theme) も参照してください

↓ `GlobalStyle.tsx`
``` GlobalStyle.tsx
export const GlobalStyle = createGlobalStyle`
  ${xBootGlobalStyle}
  /* 必要に応じて加筆 */
`
```

↓ `theme.ts`
```theme.ts
export const theme = {
  ...defaultTheme,
  ...xBootTheme
  /* 必要に応じて加筆 */
}

export type AppTheme = typeof theme

declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}
```

↓ Provider として配置する　
``` Probider
return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
```

## 方針
- `<Preflight />` は扱いにくいので `polished.normalize()` を使用した