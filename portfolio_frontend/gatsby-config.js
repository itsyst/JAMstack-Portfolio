require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: "khaled's Portfolio",
        description: "This is WebDev Portfolio Site",
        author: "Khaled El Hamzi",
        twitterUsername: "@KhaledElHamzi",
        image: "/twitter-img.png",
        siteUrl: "https://www.elhamzi.me",
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.API_URL,
                contentTypes: [`jobs`, `projects`, `blogs`],
                singleTypes: [`about`],
                queryLimit: 1000,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `PT Serif`,
                        variants: [`200`, `400`, `700`],
                    },
                    {
                        family: `Mulish`,
                        variants: [`400`, `700`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/Home/`, `/About/`, `/Contact/`],
            },
        },
    ],
}
