import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import styled from "styled-components"

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(locale: "sv", formatString: "DD MMM YYYY")
        id
        title
        category
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

const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout clasName="home-page">
      <SEO title="Hem" description="Startsidan" />
      <StyledHomePage>
        <Hero />
        <Services />
        <Jobs />
        <Projects projects={projects} title="projekt i fokus" showLink />
        <Blogs blogs={blogs} title="Senaste artiklar" showLink />
      </StyledHomePage>
    </Layout>
  )
}

const StyledHomePage = styled.section`
  background: ${props => props.theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);
`


export default IndexPage