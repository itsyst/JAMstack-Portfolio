import React from "react"
import { Link } from "gatsby"

const data = [
    {
        id: 1,
        text: "hem",
        url: "/",
    },
    {
        id: 4,
        text: "Mitt CV",
        url: "/about/",
    },
    {
        id: 3,
        text: "projekt",
        url: "/projects/",
    },
    {
        id: 4,
        text: "blog",
        url: "/blog/",
    },
    {
        id: 5,
        text: "kontakt",
        url: "/contact/",
    },
]


export default ({ styleClass }) => {
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {data.map(link => (
                <li key={link.id}>
                    <Link to={link.url}>{link.text}</Link>
                </li>
            ))}
        </ul>
    )
}
