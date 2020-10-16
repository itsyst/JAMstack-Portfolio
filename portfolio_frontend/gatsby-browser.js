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
    html{
        width:100%;
    }
    body{
        box-sizing: border-box;
        font-family: ${props => props.theme.fonts.primary};
        background-color:${props => props.theme.colors.white};
        color: ${props => props.theme.colors.grey1};
        line-height: ${props => props.theme.heights.height1};
        font-size: ${props => props.theme.sizes.xSmall};
        margin-top:${props => props.theme.spacings.large};
    }

    ul {
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4 {
        letter-spacing: ${props => props.theme.spacings.xxSmall};
        text-transform: capitalize;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        font-family: ${props => props.theme.fonts.primary};
    }

    h1 {    
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.25rem;
    }
    h4 {
        font-size: 0.875rem;
    }

    p {
        margin-bottom: 1.25rem;
        color: ${props => props.theme.colors.grey3};
    }

    @media screen and (min-width: 800px) {
        h1 {
            font-size: 4rem;
        }
        h2 {
            font-size: 2.5rem;
        }
        h3 {
            font-size: 1.75rem;
        }
        h4 {
            font-size: 1rem;
        }
        body {
            font-size: 1rem;
        }

        h1,
        h2,
        h3,
        h4 {
            line-height: 1;
        }
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)