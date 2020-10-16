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
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)