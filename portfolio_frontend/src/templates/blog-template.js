import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  console.log(data)
  const { content, title, image, desc } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{title}</h1>
            <Image fluid={image.childImageSharp.fluid} style={{ height: "40%", width: "40%" }} />
            <p></p>
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            Alla artiklar
                    </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
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
`

export default ComponentName