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
    height: 9rem;
    background: ${props => props.theme.colors.black};
    text-align: center;
    display: grid;
    place-items: center;
    padding:1rem;

    ul{
        margin :1rem auto 0;
        width: 15rem;
        display: flex;
        li {
            list-style-type: none;
            margin: 0 auto 1rem auto;    
            a{
            color: ${props => props.theme.colors.white};
                :hover{
                    color: ${props => props.theme.colors.primary5};
                }
            } 
        }
    }

    h4{
        margin-top: 0.5rem;
        color: ${props => props.theme.colors.white};
        font-weight: normal;
        text-transform: uppercase;
    }

    span {
        color: ${props => props.theme.colors.primary5};
    }
`


export default Footer