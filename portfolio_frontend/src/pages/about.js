import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Img from "gatsby-image"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import downloadFile from "../../static/CV.pdf"
import styled, { css } from "styled-components"

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]
  return (
    <Layout>
      <SEO title="CV" description="Khaleds CV" />
      <StyledAboutPage>
        <StyledSectionCenter aboutCenter>
          <StyledAboutText>
            <Title title={title} />
            <StyledAboutImg fluid={image.childImageSharp.fluid} />
            <ReactMarkdown source={info} />
            <StyledAboutStack>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </StyledAboutStack>
            <StyledButtonCV href={downloadFile} download btnCv>
              Ladda ner fullständig CV
            </StyledButtonCV>
            <StyledButton to="/contact">
              kontakta mig
            </StyledButton>
          </StyledAboutText>
        </StyledSectionCenter>
      </StyledAboutPage>
    </Layout>
  )
}

const StyledAboutPage = styled.section`
  background: ${props => props.theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
  padding: 7rem 0;
`
const StyledSectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) { 
    width: 95vw;
    ${props => props.aboutCenter && css`
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows:repeat(6, 1fr); ;
      align-items: center;
      column-gap: 4rem;
    `}
  }
`
const StyledAboutText = styled.article`
  padding: 2rem;
  background: ${props => props.theme.colors.white};
  p:nth-of-type(2),
  p:nth-of-type(3){
    margin-bottom:.2rem;
  }

  h1{
    font-size:x-large;
  }
  div>h2 {
    text-align:left;
  }

  h4{
    padding-top: 0.75rem;
    color: #2caeba;
    margin-bottom: .2rem;
  }

  li  {
  list-style-type: disc;
  margin-left:2rem;
  }

  div:nth-child(2){
    margin-left: 0;
    margin-right: 0;
  }  

  @media screen and (min-width: 992px) {
    grid-column: 2 / 12;
    grid-row: 1 / -1;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`
const StyledAboutImg = styled(Img)`
  height: 20%;
  width:20%;
  float:right;
  top: -8rem;
  border-radius:5px;
  box-shadow: 9px -9px 15px rgba(0, 0, 0, .2);

  @media screen and (min-width: 992px) {
    margin: 0;
    object-fit:contain;
  }
`
const StyledAboutStack = styled.div`
  margin-top: 1.5rem;

  span{
    display: inline-block;
    background:  ${props => props.theme.colors.grey9};
    color:  ${props => props.theme.colors.grey5};
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius:  ${props => props.theme.radius.small};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
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
        box-shadow: ${props => props.theme.shadows.darkShadow};
    }

    :active,
    :focus {
        outline: none;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); 
    }

    ${props => props.btnCv && css`
        margin:1rem .5rem 1rem 0;
    `}
`

const StyledButtonCV = styled.a`
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
        box-shadow: ${props => props.theme.shadows.darkShadow};
    }

    :active,
    :focus {
        outline: none;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); 
    }

    ${props => props.btnCv && css`
        margin:1rem .5rem 1rem 0;
    `}
`

export default About