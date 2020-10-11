import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit; 
    }

    html {
        font-size: 62.5%; /* This default size defines what 1rem is */
    }

    body{
        box-sizing: border-box;
        font-family: ${props => props.theme.fonts.primary};
        background-color:${props => props.theme.colors.white};
        color: ${props => props.theme.colors.grey1};
        line-height: ${props => props.theme.heights.height3};
        font-size: ${props => props.theme.sizes.medium};
        margin-top:${props => props.theme.spacings.xLarge};
    }

    ul{
        list-style-type: none,
    }

    a{
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4 {
        letter-spacing:${props => props.theme.spacings.xxxSmall};
        text-transform: capitalize;
        line-height: ${props => props.theme.heights.height2};
        margin-bottom:${props => props.theme.spacings.small};
        font-family: ${props => props.theme.fonts.primary};
    }

    h1 {
        font-size: ${props => props.theme.sizes.large};
    }
    h2 {
        font-size: ${props => props.theme.sizes.medium};
    }
    h3 {
        font-size:${props => props.theme.sizes.small};
    }
    h4 {
        font-size: ${props => props.theme.sizes.small};
    }

    p {
        margin-bottom:${props => props.theme.spacings.small};
        color: ${props => props.theme.colors.grey3};
    }

    .btn {
        text-transform: uppercase;
        background: ${props => props.theme.colors.primary5};
        color:  ${props => props.theme.colors.white};
        padding: 0.6rem 1.2rem;
        letter-spacing: ${props => props.theme.spacings.xxxSmall};
        display: inline-block;
        font-weight: 700;
        -webkit-transition: ${props => props.theme.animations.transition};
        transition: ${props => props.theme.animations.transition};
        font-size: 1.4rem;
        border: 2px solid transparent;
        cursor: pointer;
        border-radius: ${props => props.theme.radius.small};

        :hover {
            color: ${props => props.theme.colors.primary1};
            background: ${props => props.theme.colors.primary5};
            transform: translateY(-3px);
            box-shadow: ${props => props.theme.shadows.darkShadow};
        }
        :hover::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0; 
        }
    }

    .btn:active, .btn:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); 
    }
    .center-btn {
        display: block;
        width: 19.2rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 4.8rem;
    }

    .section {
        padding: 5rem 0; 
    }

    .section-center {
        width: 90vw;
        margin: 0 auto;
        max-width: 117rem;
    }

    .underline {
        width: 8rem;
        height: 0.4rem;
        margin-bottom: 2rem;
        background: ${props => props.theme.colors.primary5};
        margin-left: auto;
        margin-right: auto;
    }

    .section-title {
        margin-bottom: 1.2rem;
        text-align: center;
    }

    .bg-grey {
        background: ${props => props.theme.colors.grey10};
    }

    .social-links {
        margin-top: 3.2rem;
        width: 24rem;
        display: flex;
        justify-content: space-between;
    }
    
    .social-link {
        font-size: 3.8rem;
        color: ${props => props.theme.colors.grey1};
        transition:  ${props => props.theme.animations.transition};
        
        :hover {
        color: ${props => props.theme.colors.primary5};
        }
    }

    @media ${props => props.theme.breakpoints.desktop} { 
        h1 {
        font-size: ${props => props.theme.sizes.xLarge};
        }
        h2 {
        font-size: ${props => props.theme.sizes.medium};
        }
        h3 {
        font-size: ${props => props.theme.sizes.small};
        }
        h4 {
        font-size: ${props => props.theme.sizes.small};
        }
        body {
        font-size: ${props => props.theme.sizes.xSmall};
        }
        h1,
        h2,
        h3,
        h4 {
        line-height: ${props => props.theme.heights.height2};
        }

        .section-center {
            width: 95vw;
     
        }
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)