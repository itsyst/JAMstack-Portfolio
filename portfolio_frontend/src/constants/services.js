import React from "react"
import { FaCode } from "react-icons/fa"
import { SiAdobexd } from "react-icons/si"
import { VscEditorLayout } from "react-icons/vsc"


export default [
    {
        id: 1,
        icon: <FaCode className="service-icon" />,
        title: "web development",
        text: `I can create a dynamic website that runs smoothly using modern programming techniques. (Laravel, Gatsby, VueJs, React, ASP.NET Core ) `,
    },
    {
        id: 2,
        icon: <VscEditorLayout className="service-icon" />,
        title: "Responsive Design",
        text: `I make your website adapt to various display sizes: All browsers and Screens, Mobiles, Tablets, PC etc...`,
    },
    {
        id: 3,
        icon: <SiAdobexd className="service-icon" />,
        title: "Web - app design",
        text: `I am ready to make colorful posters, logos and qualified web designs with attractive effects which catches visitor's Eye. `,
    },
]
