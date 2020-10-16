import React from "react"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components"

const Footer = () => {
    return (
        <StyledFooter>
            <SocialLinks />
            <h4>
                copyright&copy;{new Date().getFullYear()} |
                    <span> WD </span> | all rights reserved
                </h4>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    height: 12rem;
    background: ${props => props.theme.colors.black};
    text-align: center;
    display: grid;
    place-items: center;
    ul{
        margin :1rem auto;
        display: flex;
        li {
            list-style-type: none;
            margin: .1rem auto;    
            a{
            margin:0.3rem;
            color: ${props => props.theme.colors.white};
                :hover{
                    color: ${props => props.theme.colors.primary5};
                }
            } 
        }
    }

    h4{
        overflow-wrap: break-word;
        margin-top: -2.5rem;
        color: ${props => props.theme.colors.white};
        font-weight: normal;
        text-transform: uppercase;
    }

    span {
        color: ${props => props.theme.colors.primary5};
    }
`


export default Footer