import React from "react"
import {
  FaDev,
  FaStackOverflow,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"


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

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {data.map(link => (
        <li key={link.id}>
          <a href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">{link.icon}</a>
        </li>

      ))}
    </ul>
  )
}

