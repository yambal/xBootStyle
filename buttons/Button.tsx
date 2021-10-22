import React from "react"
import { x } from "@xstyled/styled-components"
import styled from "styled-components"

/**
 * WIP 
 */

export type ButtonProps = typeof x.button.defaultProps & {
  valiant?: 'primary'
}

const _Button: React.FC<ButtonProps> = React.forwardRef(function PreformattedText(
  {
    valiant,
    children,
    ...restProps
  },
  ref
) {

  const colorName = React.useMemo(() => {
    switch (valiant) {
      case 'primary':
        return {
          bg: {
            _: 'primary',
            hover: 'primaryDarken',
            active: 'primaryDarken',
          },
          borderColor: {
            _: 'primary',
            hover: 'primaryDarken',
            active: 'primaryDarken'
          },
          boxShadow: {
            _: "none",
            focus: "0 0 0 0.25rem rgb(49 132 253 / 50%)"
          },
          outline: {
            focus: 0
          },
          color: 'white'
        }
      default:
        return {
          bg: 'transparent',
          color: 'dark'
        }
    }
  }, [valiant])

  return (
    <x.button
      display="inline-block"
      fontWeight="400"
      lineHeight="1.5"
      textAlign="center"
      textDecoration="none"
      verticalAlign="middle"
      cursor="pointer"
      userSelect="none"
      border="1px solid transparent"
      padding=".375rem .75rem"
      fontSize="1rem"
      borderRadius=".25rem"
      transition="color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out"
      opacity={{
        _: 1,
        disabled: 0.6
      }}
      pointerEvents={{
        _: "auto",
        disabled: 'none'
      }}
      {...colorName}
      {...restProps}
      ref={ref}
    >
      {children}
    </x.button>
  )

})

export const Button = styled(_Button)``