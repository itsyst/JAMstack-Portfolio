import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const data = [
  {
    id: 1,
    text: "hem",
    url: "/",
  },
  {
    id: 2,
    text: "Mitt CV",
    url: "/about/",
  },
  {
    id: 3,
    text: "projekt",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "kontakt",
    url: "/contact/",
  },
]


const NavbarLinks = () => {
  return (
    <>
      {data.map(link => (
        <StyledNavItems to={link.url}>{link.text}</StyledNavItems>
      ))}
    </>
  )
}

const StyledNavItems = styled(Link)`
  z-index:999;
  text-decoration: none;
  color: ${props => props.theme.colors.grey1};
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #33CCCC;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #33CCCC;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }

`
export default NavbarLinks