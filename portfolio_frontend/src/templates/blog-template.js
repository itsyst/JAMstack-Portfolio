import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"
import SEO from "../components/SEO"
import styled, { css } from "styled-components"

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      category
        image {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  }
`

const ComponentName = ({ data }) => {
  const { content, title, image, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <StyledTemplate>
        <StyledTemplateContent>
          <article className="blog-content">
            <h1>{title}</h1>
            <Img fluid={image.childImageSharp.fluid} style={{ width: '40%', height: '40%' }} />
            <p></p>
            <ReactMarkdown source={content} />
          </article>
          <StyledTemplateButton to="/blog" middle="true">
            Alla artiklar
          </StyledTemplateButton>
        </StyledTemplateContent>
      </StyledTemplate>
    </Layout>
  )
}

const StyledTemplate = styled.section`
  background: ${props => props.theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
  padding: 5rem 0;

  h1{
    text-align: center;
    letter-spacing: ${props => props.theme.spacings.xxSmall};
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 3rem;
    @media screen and (min-width: 800px) {
        font-size: 4rem;
        line-height: 1;
    }
  }
  h2{
    text-align:center;
    text-align: center; 
    letter-spacing: ${props => props.theme.spacings.xxSmall};
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    @media screen and (min-width: 800px) {
        font-size: 2.5rem;
        line-height: 1;
    }
  }
  ul {
    margin-top: 2rem;
    display: inline-block;
    list-style-type: none;
    li {
      background: ${props => props.theme.colors.grey9};
      color: ${props => props.theme.colors.grey5};
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      text-transform: uppercase;
    }
  }
  blockquote {
    background: ${props => props.theme.colors.grey9};
    border-radius: ${props => props.theme.radius.small};
    padding: 1rem;
    line-height: 2;
    color: ${props => props.theme.colors.primary5};
    margin: 2rem 0;
  }
  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: ${props => props.theme.radius.small};
  }
  img {
    width: 15rem;
    height: 15rem;
    margin: 3rem 0;
  }
`

const StyledTemplateContent = styled.article`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  a{
    width:13rem;
  }

  h1,h2{
    text-align:left;
    font-size:x-large;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`

const StyledTemplateButton = styled(Link)`
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

    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
    }
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

export default ComponentName