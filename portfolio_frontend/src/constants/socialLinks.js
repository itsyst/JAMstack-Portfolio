import React from "react"
import {
  FaDev,
  FaStackOverflow,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import styled from "styled-components"

const data = [
  {
    id: 1,
    icon: <FaDev />,
    url: "https://dev.to/itsyst",
  },
  {
    id: 2,
    icon: <FaGithubSquare />,
    url: "https://github.com/itsyst",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/khaledelhamzi/",
  },
  {
    id: 4,
    icon: <FaTwitterSquare />,
    url: "https://twitter.com/khaledelhamzi",
  },
  {
    id: 5,
    icon: <FaStackOverflow />,
    url: "https://stackoverflow.com/users/14376424/khaled-el-hamzi?tab=profile",
  },
]

export default () => {
  return (
    <StyledSocialLink>
      {data.map(link => (
        <li key={link.id}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">{link.icon}</a>
        </li>

      ))}
    </StyledSocialLink>
  )
}

const StyledSocialLink = styled.ul`
display: flex;
align-items:center;
margin-top:2rem;
  li{
    display: block;
    margin-right :.3rem;
  }
  a{
    font-size: 2.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.grey1};
    transition: ${props => props.theme.animations.transition};
    :hover {
      color: ${props => props.theme.colors.primary5};
    }
  }
  flex-flow: row wrap;
  @media screen and (max-width: 245px) {
    width: 50vw;
    a{
        font-size: 1.5rem;
    }
  }
`