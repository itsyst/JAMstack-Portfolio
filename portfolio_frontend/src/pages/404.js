import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styled from "styled-components"

const Error = () => {
  return (
    <Layout>
      <StyledErrorPage>
        <StyledErrorContainer>
          <h1>Oj, Något gick fel!</h1>
          <StyledButton to="/">
            Tillbaka Hem
          </StyledButton>
        </StyledErrorContainer>
      </StyledErrorPage>
    </Layout>
  )
}

const StyledErrorPage = styled.main`
  display: grid;
  place-items: center;
  background: ${props => props.theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
  text-align: center;
`

const StyledErrorContainer = styled.main`
    h1 {
    letter-spacing: ${props => props.theme.spacings.xxSmall};
    line-height: 1.25;
    font-family: ${props => props.theme.colors.primary};
    font-size: 3rem;
    text-transform: uppercase;
    color:  ${props => props.theme.colors.redDark};
    margin-bottom: 2rem;

    @media screen and (min-width: 800px) {
      font-size: 4rem;
      line-height: 1;
    } 
  }
`

const StyledButton = styled(Link)`
    text-transform: uppercase;
    background: ${props => props.theme.colors.primary5};
    color: ${props => props.theme.colors.primary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${props => props.theme.spacings.xxSmall};
    display: inline-block;
    font-weight: 700;
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: ${props => props.theme.shadows.darkShadow};
    border-radius:${props => props.theme.radius.small};
    text-decoration: none;
    padding: 0.6rem 1.2rem;

    :hover {
        color: ${props => props.theme.colors.primary1};
        background: ${props => props.theme.colors.primary5};
        transform: translateY(-3px);
        box-shadow: ${props => props.theme.shadows.darkShadow};

        ::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0; 
        }
    }

    :active,
    :focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); 
    }
`
export default Error