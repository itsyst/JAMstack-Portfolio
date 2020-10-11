import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
    file(relativePath: { eq: "hero-img.png" }) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`
const Hero = () => {
    const { file: { childImageSharp: { fluid }, }, } = useStaticQuery(query)

    return (
        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <h1>Jag är Khaled</h1>
                    <div className="underline"></div>
                    <h4><span role="img" aria-label="high-voltage">⚡</span> Full-Stack Systemutvecklare | <span role="img" aria-label="flag-for-sweden">🇸🇪</span></h4>
                    <h4><span role="img" aria-label="heart">💜{" "}</span>
                        <a target="_blank" rel="noopener noreferrer" href="https://strapi.io/documentation/v3.x/getting-started/introduction.html">Strapi</a>,{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/getting-started.html">React</a>,{" "}
                        <a target="_blank" rel="noopener noreferrer" href="https://laravel.com/docs/8.x">Laravel</a>{" "},
                        <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/docs/">Gatsby</a>{" "},
                        <a target="_blank" rel="noopener noreferrer" href="https://vuejs.org/v2/guide/">VueJs</a>{" "},
                        <a target="_blank" rel="noopener noreferrer" href="https://styled-components.com/docs">Styled Components</a>
                    </h4>
                    <Link to="/contact" className="btn">kontakta mig</Link>
                    <SocialLinks />
                </article>
                <Image fluid={fluid} className="hero-img" />
            </div>
        </header>
    )
}
export default Hero