import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components"


const Hero = () => {
    const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hero-img" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <StyledHero>
            <StyledHeroCenter>
                <StyledHeroInfo>
                    <h1>Jag är Khaled</h1>
                    <StyledHeroUnderline />
                    <h4><span role="img" aria-label="high-voltage">⚡</span> Full-Stack Systemutvecklare | <span role="img" aria-label="flag-for-sweden">🇸🇪</span></h4>
                    <h4><span role="img" aria-label="heart">💜{" "}</span>
                        <a target="_blank" rel="noopener noreferrer" href="https://strapi.io/documentation/v3.x/getting-started/introduction.html">Strapi</a>,{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">React</a>,{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://laravel.com/docs/8.x">Laravel</a>{" "},
                        <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/docs/">Gatsby</a>{" "},
                        <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/v2/guide/">VueJs</a>{" "},
                        <a target="_blank" rel="noopener noreferrer" href="https://styled-components.com/docs">Styled Components</a>
                    </h4>
                    <StyledHeroButton to="/contact" >kontakta mig</StyledHeroButton>
                    <SocialLinks />
                </StyledHeroInfo>
                <StyledHeroImg>
                    <Img fluid={data.file.childImageSharp.fluid} alt="hero" />
                </StyledHeroImg>
            </StyledHeroCenter>
            <StyledHeroShape />
        </StyledHero>
    )
}
export default Hero

const StyledHero = styled.header`
    position: relative;
    z-index: 1;
    background-position: bottom center;
    background-color: #F9F9F9;
    overflow: hidden;
    padding-top: 70px;
    height:100vh;
`
const StyledHeroShape = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    z-index: -1;   
    
    ::before {
    position: absolute;
    content: '';
    width: 1000%;
    height: 100%;
    background-color: #33CCCC;
    -webkit-transform: skewX(20deg);
    -moz-transform: skewX(20deg);
    -ms-transform: skewX(20deg);
    -o-transform: skewX(20deg);
    transform: skewX(20deg);
    top: 0;
    left: 0;
    }  
`
const StyledHeroCenter = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between
`
const StyledHeroInfo = styled.section`
    margin-left: 2rem;
    h4:nth-of-type(2){
        overflow-wrap: break-word;
        margin-bottom:5rem;
        a{
            color: ${props => props.theme.colors.grey1};
        }
    }
`
const StyledHeroUnderline = styled.section`
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background:${props => props.theme.colors.primary5};
    margin-left: 0;
    margin-right: auto;
    text-align:left;
`
const StyledHeroImg = styled.div`
    width: 40%;
    @media screen and (max-width: 767px) {
        display:none;
    }

    opacity: 0;
    animation: slideLeft 0.5s ease-in-out 0.3s forwards;
    @keyframes slideLeft {
    0% {
        transform: translateX(200px);
        opacity: 0;
    }
    50% {
            transform: translateX(100px);
            opacity: 0.5;
        }
    100% {
            transform: translateX(0);
            opacity: 1;
        }
    }  
`
const StyledHeroButton = styled(Link)`
    text-transform: uppercase;
    background: ${props => props.theme.colors.primary5};
    color: ${props => props.theme.colors.white};
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

    @media screen and (max-width: 345px) {
        font-size: .8rem;
        padding:0.5rem;
    }
`