import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styled from "styled-components"

const Error = () => {
    return (
        <Layout>
            <StyledMain>
                <StyledContainer>
                    <h2>Tack, jag har nu mottagit ditt meddelande och kommer snart att ta kontakt med dig.</h2>
                    <StyledButton to="/" >
                        Tillbaka Hem
                    </StyledButton>
                </StyledContainer>
            </StyledMain>
        </Layout>
    )
}

const StyledMain = styled.main`
    display: grid;
    place-items: center;
    text-align: center;
    background: ${props => props.theme.colors.grey10};
    min-height: calc(100vh - 5rem - 9rem);
`

const StyledContainer = styled.div`
    text-align: center;
    h2{
        margin:5rem;
        padding: 2rem;
        background-color: ${props => props.theme.colors.white};
        border-radius:${props => props.theme.radius.small};
        box-shadow:${props => props.theme.shadows.darkShadow};
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