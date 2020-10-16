import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import styled from "styled-components"


const Project = ({ description, title, github, stack, url, image, index }) => {
    return (
        <StyledProject>
            {/* if image is not supplied, instead of breaking, do not show any image */}
            {image && (
                <StyledProjectImg fluid={image.childImageSharp.fluid} />
            )}
            <StyledProjectInfo>
                <span>0{index + 1}.</span>
                {/* if title is not supplied, set a default title */}
                <h3>{title || "Projekt"}</h3>
                <p>{description}</p>
                <StyledProjectStack>
                    {stack.map(item => {
                        return <span key={item.id}>{item.title}</span>
                    })}
                </StyledProjectStack>
                <div>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare />
                    </a>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <FaShareSquare />
                    </a>
                </div>
            </StyledProjectInfo>
        </StyledProject>
    )
}

/*if you  forget  for example to set these fields in strapi,
so if you forget to give them values, you will get a error in your console
*/
Project.propTypes = {
    title: PropTypes.string.isRequired,
    git: PropTypes.string,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const StyledProjectImg = styled(Img)`
    border-top-left-radius:${props => props.theme.radius.small};
    border-top-right-radius: ${props => props.theme.radius.small};
    height: 19rem;
    z-index: 1;

    ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, ${props => props.theme.colors.primary5}, #222);
        opacity: 0.85;
        transition: ${props => props.theme.animations.transition};
    }

    @media screen and (min-width: 576px) {
        height: 19rem;
    }
    @media screen and (min-width: 768px) {
        height: 22rem;
    }
    @media screen and (min-width: 992px) {
        grid-column: 1 / span 8;
        grid-row: 1 / 1;
        height: 30rem;
        border-radius: ${props => props.theme.radius.small};
        box-shadow: var(--dark-shadow);
    }
`
const StyledProjectInfo = styled.div`
    border-radius: ${props => props.theme.radius.small};
    box-shadow: ${props => props.theme.shadows.darkShadow};
    background: ${props => props.theme.colors.white};
    padding: 1rem 2rem;

    span{
        font-size: 1.25rem;
        color: ${props => props.theme.colors.primary5};
        margin-bottom: .75rem;
    }
    h3 {
        font-weight: 500;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }
    a{
        display: inline-block;
        color: ${props => props.theme.colors.primary5};
        font-size: 1.25rem;
        margin-right: 0.5rem;
        transition: ${props => props.theme.animations.transition};
        :hover{
            color: ${props => props.theme.colors.primary1};
        }
    }
    @media screen and (min-width: 992px) {
        border-radius: ${props => props.theme.radius.small};
        box-shadow: ${props => props.theme.shadows.darkShadow};
        z-index: 1;
        grid-column: 5 /12;
        grid-row: 1 / 1;
    }
    
`
const StyledProject = styled.article`
    display: bock;
    margin-bottom: 4rem;

    :hover ${StyledProjectImg}::after {
        opacity: 0;
    }

    
    :nth-child(even) ${StyledProjectImg}{
        grid-column: 5 / -1;
        grid-row: 1 / 1;
    }  
 
    :nth-of-type(even) ${StyledProjectInfo}{
            grid-column: 2 / span 7;
            grid-row: 1 / 1;
            text-align: left;
    } 

    @media screen and (min-width: 991px){
        display:grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
    }

`
const StyledProjectStack = styled.div`
    margin-bottom: 1rem;
    span {
        display: inline-block;
        background: ${props => props.theme.colors.grey9};
        color: ${props => props.theme.colors.grey5};
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: ${props => props.theme.radius.small};
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.85rem;
    }
`
export default Project