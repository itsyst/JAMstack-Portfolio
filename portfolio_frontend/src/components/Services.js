import React from "react"
import Title from "./Title"
import services from "../constants/services"
import styled, { css } from "styled-components"

const Services = () => {
    return (
        <StyledServiceSection bgGrey>
            <Title title="Kunskaper" />
            <StyledServiceCenter servicesCenter>
                {services.map(service => {
                    //  destructor
                    const { id, icon, title, text } = service

                    return (
                        <StyledServiceArticle key={id}>
                            {icon}
                            <h4>{title}</h4>
                            <StyledServiceUnderline />
                            <p>{text}</p>
                        </StyledServiceArticle>
                    )
                })}
            </StyledServiceCenter>
        </StyledServiceSection>
    )
}

const StyledServiceSection = styled.section`
    padding: 5rem 0;
    ${props => props.bgGrey && css`
        background: ${props => props.theme.colors.grey10};
    `}
`
const StyledServiceCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    @media screen and (min-width: 992px) {
        width: 95vw;
    }
    ${props => props.servicesCenter && css`
        @media screen and (min-width: 676px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            -webkit-column-gap: 2rem;
            -moz-column-gap: 2rem;
            column-gap: 2rem;
        }
        @media screen and (min-width: 992px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    `}
`
const StyledServiceArticle = styled.article`
    background: ${props => props.theme.colors.white};
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: ${props => props.theme.radius.small};
    text-align: center;
    -webkit-transition: ${props => props.theme.animations.transition};
    transition:  ${props => props.theme.animations.transition};
    h4 {
        letter-spacing: ${props => props.theme.spacings.xxSmall};
        text-transform: capitalize;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        font-family: ${props => props.theme.fonts.primary};
        font-size: 0.875rem;
        color: ${props => props.theme.colors.black};

        @media screen and (min-width: 800px) {
            font-size: 1rem;
            line-height: 1;
        }
    }
    p {
        -webkit-transition:  ${props => props.theme.animations.transition};
        transition:  ${props => props.theme.animations.transition};
        margin-bottom: 1.25rem;
        color: ${props => props.theme.colors.grey3};
    }


    :hover {
        background:  ${props => props.theme.colors.primary5};
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); 
        animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
       
        h4,p{
            color: ${props => props.theme.colors.white};
        } 
        div {         
            background: ${props => props.theme.colors.black};   
        }

                @keyframes shake {
            10%, 90% {
                transform: translate3d(-1px, 0, 0);
            }
            20%, 80% {
                transform: translate3d(2px, 0, 0);
            }

            30%, 50%, 70% {
                transform: translate3d(-4px, 0, 0);
            }

            40%, 60% {
                transform: translate3d(4px, 0, 0);
            }
        }
    } 

`
const StyledServiceUnderline = styled.div`
    width: 3rem;
    height: 0.12rem;
    margin-bottom: 1.25rem;
    background:${props => props.theme.colors.primary5};
    margin-left: auto;
    margin-right: auto;

`
export default Services