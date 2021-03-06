import React from "react"
import { x, th, css } from "@xstyled/styled-components"
import { Container } from "../Container"
import styled　from "styled-components"
import { Link } from "gatsby"
import { NavItem } from "./NavItem"
import { xBootTheme } from "../styles/xBootTheme"
import { Button } from "../buttons/Button"

const NavbarNav = styled(x.nav)`
  ${Container} {
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    color: inherit;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
  }
`

const Menus = styled(x.div)`
  a {
    color: inherit;
    display: block;
    padding: .5rem;
    text-decoration: none;
    opacity: 0.55;
    transition: opacity 0.25s;
    &:hover, &.active {
      color: inherit;
      opacity: 1;
    }
  }
`

/**
 * WIP
 */

export type NavbarProps = typeof x.nav.defaultProps & {
  brand?: React.ReactNode
  menuLinks?: React.ReactNode[]
}

export const Navbar: React.FC<NavbarProps> = React.forwardRef(function PreformattedText(
  {
    brand,
    menuLinks,
    children,
    ...restProps
  },
  ref
) {
  const [isMenuExpanded, setIsMenuExpanded] = React.useState(false)

  const onMenuExpandToggle = React.useCallback(() => {
    setIsMenuExpanded(!isMenuExpanded)
  }, [isMenuExpanded])
  
  return (
    <NavbarNav
      position="relative"
      display="flex"
      flexWrap={{
        _: "wrap",
        md: "nowrap"
      }}
      alignItems="center"
      justifyContent="space-between"
      pt=".5rem"
      pb=".5rem"
      {...restProps}
      ref={ref}
    >
      <Container>
        {brand && brand}
        <Button
          color={restProps.color}
          onClick={onMenuExpandToggle}
          display={{
            md: "none"
          }}
        >-</Button>
        <Menus
          display={{
            _: isMenuExpanded ? "block" : "none",
            md: "flex"
          }}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <x.ul
            display="flex"
            flexDirection={{
              _: "column",
              md: "row"
            }}
            pl="0"
            mb="0"
            listStyleType="none"
          >
            {menuLinks && menuLinks.map((menuLink) => {
              return (
                <NavItem as="li">{menuLink}</NavItem>
              )
            })}
          </x.ul>
          <x.div>
            {children}
          </x.div>
        </Menus>
      </Container>
    </NavbarNav>
  )
})
