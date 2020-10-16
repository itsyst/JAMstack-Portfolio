import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <StyledBlogsSection>
      <Title title={title} />
      <StyledBlogsCenter blogsCenter>
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </StyledBlogsCenter>
      {/* If the showLink is undefined, dont show any link, otherwise show link */}
      {showLink && (
        <StyledBlogsButton to="/blog" middle="true">
          Alla artiklar
        </StyledBlogsButton>
      )}
    </StyledBlogsSection>
  )
}

const StyledBlogsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.white};
`
const StyledBlogsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }

  ${props => props.blogsCenter && css`
    @media screen and (min-width: 576px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
      column-gap: 2rem;
    }
  `}
`
const StyledBlogsButton = styled(Link)`
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
        width: 13rem;
        text-align: center;
        margin: 0 auto;
        margin-top: 3rem;
    `}
`

export default Blogs