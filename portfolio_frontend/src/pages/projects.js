import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"
import styled from "styled-components"

export const query = graphql`
  {
    allStrapiProjects {
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
  }
`

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projekt" description="Projektsidan" />
      <StyledProjectsPage>
        <Projects projects={projects} title="Alla projekt" />
      </StyledProjectsPage>
    </Layout>
  )
}

const StyledProjectsPage = styled.section`
  background: ${props => props.theme.colors.grey10};
  min-height: calc(100vh - 5rem - 9rem);  
`

export default ProjectsPage