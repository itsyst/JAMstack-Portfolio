import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const Projects = ({ projects, title, showLink }) => {
    return (
        <StyledProjects projects>
            <Title title={title} />
            <StyledProjectsCenter>
                {projects.map((project, index) => {
                    return <Project key={project.id} index={index} {...project} />
                })}
            </StyledProjectsCenter>
            {showLink && (
                <StyledProjectsBtn to="/projects" middle="true">
                    Alla projekt
                </StyledProjectsBtn>
            )}
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    padding: 5rem 0;
    ${props => props.projects && css`
        background: ${props => props.theme.colors.grey10};
    `}
`
const StyledProjectsCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;    
    @media screen and (min-width: 992px) { 
        width: 95vw;   
}
`
const StyledProjectsBtn = styled(Link)`
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

    ${props => props.middle && css`
        display: block;
        width: 12rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 3rem;
    `}
`
export default Projects