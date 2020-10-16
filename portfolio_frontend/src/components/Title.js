import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
    return (
        <StyledSectionTitle>
            <h2>{title || "default title"}</h2>
            <StyledUnderline />
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled.div`
    margin-bottom: 4rem;
    h2{
        letter-spacing: ${props => props.theme.spacings.xxSmall};
        text-transform: capitalize;
        line-height: 1.25;
        font-family: ${props => props.theme.fonts.primary};
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align: center;

        @media screen and (min-width: 800px) {
            font-size: 2.5rem;
            line-height: 1;
        }
    }
`
const StyledUnderline = styled.div`
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background:${props => props.theme.colors.primary5};
    margin-left: auto;
    margin-right: auto;
`
export default Title