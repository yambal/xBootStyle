import React from "react"
import { x } from "@xstyled/styled-components"

/**
 * コンテナは、基本的なレイアウト要素であり、特定のデバイスやビューポート内のコンテンツに適切な余白を与え整列させることができます。
 * BootStrap の Container と同様の機能を提供しますが、ブレークポイントについては xstyled のデフォルトテーマに沿っています
 */
type ContainerProps = typeof x.div.defaultProps & {
  /**
   * ビューポート幅のコンテナを使うには fluid を使用してください
   */
  breakPoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fluid'
}

export const Container: React.FC<ContainerProps> = React.forwardRef(function PreformattedText(
  {
    breakPoint,
    children,
    ...restProps
  },
  ref
) {

  const maxWidth = React.useMemo(() => {

    const mx = {
      _: "100%",
      sm: 'calc(640px * 0.95)',
      md: 'calc(768px * 0.95)',
      lg: 'calc(1024px * 0.95)',
      xl: 'calc(1280px * 0.95)',
      "2xl": 'calc(1536px * 0.95)'
    }

    switch (breakPoint) {
      case 'fluid':
        return '100%'
      case 'sm':
        mx.sm = '100%'
      case 'md':
        mx.md = '100%'
      case 'lg':
        mx.lg = '100%'
      case 'xl':
        mx.xl = '100%'
      case '2xl':
        mx['2xl'] = '100%'
    }
    return mx
  },[breakPoint])

  return (
    <x.div
      w="100%"
      px="0.75rem"
      mx="auto"
      maxWidth={maxWidth}
      {...restProps}
      ref={ref}
    >
      {children}
    </x.div >
  )
})