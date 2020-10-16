import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"


const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledLogo as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

export default Logo
