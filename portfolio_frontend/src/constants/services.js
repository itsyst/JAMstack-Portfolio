import React from "react"
import { FaCode } from "react-icons/fa"
import { SiAdobexd } from "react-icons/si"
import { VscEditorLayout } from "react-icons/vsc"

const StyledIcon = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
}

export default [
    {
        id: 1,
        icon: <FaCode style={StyledIcon} />,
        title: "web development",
        text: `Jag kan skappa en dynamisk webbplats som går smidigt med moderna programmeringstekniker. (Laravel, Gatsby, VueJs, React, ASP.NET Core)`,
    },
    {
        id: 2,
        icon: <VscEditorLayout style={StyledIcon} />,
        title: "Responsive Design",
        text: `Jag kan anpassa din webbplats till olika skärmstorlekar: Alla webbläsare och skärmar, mobiler, surfplattor, PC etc ...`,
    },
    {
        id: 3,
        icon: <SiAdobexd style={StyledIcon} />,
        title: "Web - app design",
        text: `Jag är redo att göra färgglada affischer, logotyper och kvalificerade webbdesigner med attraktiva effekter som fångar besökarens öga. `,
    },
]


