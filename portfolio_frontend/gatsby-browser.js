// import React from "react"
// import { createGlobalStyle, ThemeProvider } from "styled-components"
// import Theme from "./src/themes/theme"
import "./src/themes/main.css"

// const GlobalStyles = createGlobalStyle`
//     *,
//     *::after,
//     *::before {
//         margin: 0;
//         padding: 0;
//         box-sizing: inherit; 
//     }

//     html {
//         font-size: 62.5%; /* This default size defines what 1rem is */
//     }

//     body{
//         box-sizing: border-box;
//         font-family: ${props => props.theme.fonts.primary};
//         background-color:${props => props.theme.colors.white};
//         color: ${props => props.theme.colors.grey1};
//         line-height: ${props => props.theme.heights.height3};
//         font-size: ${props => props.theme.sizes.medium};
//         margin-top:${props => props.theme.spacings.xLarge};
//     }
// `

// export const wrapRootElement = ({ element }) => (
//     <ThemeProvider theme={Theme}>
//         <GlobalStyles />
//         {element}
//     </ThemeProvider>
// )