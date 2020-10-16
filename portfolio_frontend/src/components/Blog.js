import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <StyledArticle>
        {/* if image is not supplied, instead of breaking, do not show any image */}
        {image && (
          <StyledBlogImg fluid={image.childImageSharp.fluid} />
        )}
        <StyledBlogCard>
          {/* if title is not supplied, set a default title */}
          <h4>{title || "Artiklar"}</h4>
          <p>{desc}</p>
          <StyledBlogFooter>
            <p>{category}</p>
            <p>{date}</p>
          </StyledBlogFooter>
        </StyledBlogCard>
      </StyledArticle>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

const StyledArticle = styled.article`
  display: block;
  margin-bottom: 2rem;
  background: ${props => props.theme.colors.grey10};
  border-radius: ${props => props.theme.radius.small};
  box-shadow: ${props => props.theme.shadows.lightShadow};
  transition: ${props => props.theme.animations.transition};
  &:hover {
  box-shadow: ${props => props.theme.shadows.lightShadow};
  transform: scale(1.02);
  
  article {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }
}
`
const StyledBlogImg = styled(Img)`
  border-top-left-radius: ${props => props.theme.radius.small};
  border-top-right-radius: ${props => props.theme.radius.small};
  height: 15rem;

  @media screen and (min-width: 576px) {
    height: 17.5rem;
  }

  @media screen and (min-width: 850px) {
    height: 13.75rem;
  }
`
const StyledBlogCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 1.5rem 1rem;
  h4 {
    color: ${props => props.theme.colors.grey1};
  }
`
const StyledBlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-bottom: 0;
    font-weight: bold;
    color: ${props => props.theme.colors.grey5};
    :first-of-type {
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
  }      
`
export default Blog