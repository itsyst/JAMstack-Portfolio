<p align="center">
  <a href="https://github.com/itsyst/khaled_elhamzi_portfolio">
    <img alt="logo" src="https://res.cloudinary.com/dzltxlm9l/image/upload/v1601971370/logo_fd60ee4493.png" width="90"  />
  </a>
</p>
<h1 align="center">
  Gatsby's Portfolio
</h1>


[![Netlify Status](https://api.netlify.com/api/v1/badges/98f353bd-f2a5-4c4a-b68e-d378dd652281/deploy-status)](https://app.netlify.com/sites/frosty-ramanujan-57495b/deploys)
## 🚀 Setup Notes

1. `npm install` ot `yarn` in both frontend and backend directories
2. NOTE!!! Beware that after cloning this repo, you need to delete the upload folder and its contents in the strapi backend.
3. In the backend_portfolio run `npm run develop` or `strapi develop`
4. Create the file plugins.js under config, plugins file will contain following the structure.

5.

```
module.exports = ({ env }) => (
  {
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
  });
  ````

6. Create a Cloudinary account to get your own credentials values cloud_name, api_key and api_secret.
7. Create .env in the backend-portfolio root and replace the `xxxx` with you own values from Cloudinary.
8. The file .env will contain the following structure.

```
 CLOUDINARY_NAME=xxx
 CLOUDINARY_KEY=xxxx
 CLOUDINARY_SECRET=xxxx
 ```

9. Create a [formspree](https://formspree.io/login) account
10. PS!!! In your frontend_portfolio, under the contact page content, you have to specify your own form's endpoint integration (xxxx)

11.

```html:
<form action="https://formspree.io/f/xxxx" method="POST">
    <label>
    Your email:`
        <input type="text" name="_replyto">
    </label>
    <label>
    Your message:
        <textarea name="message"></textarea>
    </label>`
         <!-- your other form fields go here -->
        <button type="submit">Send</button>
    </form>
```
>Or you can just use the netlify form, and do not forget to set the netlify attribute like below
```html:
<form action="/thanks" name="contact" netlify>
```

12. In the frontend run `gatsby develop` and keep running the backend_portfolio in the background to fetch data from strapi.
13. To deploy you site to netlify you have to set the API_URL in gatsby-config file to your heroku url "https://YOUR-APP-URL.herokuapp.com"
```
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: process.env.API_URL,
                contentTypes: [`jobs`, `projects`, `blogs`],
                singleTypes: [`about`],
                queryLimit: 1000,
            },
        },
```
14. For your project environment variables that you want to access in client-side browser, you can define an environment config file, .env.development and/or .env.production, in your root folder, and do not forget to add the folowing code to gatsby-config.js file.
```
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
```
15. To make the reCAPTCHA, you’ll need to do the following:

1. [Sign up for a reCAPTCHA API key pair](http://www.google.com/recaptcha/admin) for your site.
2. [Log in to your Netlify account](https://app.netlify.com), and add the following
   environment variables to your site’s Settings > Build & deploy > Build environment variables:

- `SITE_RECAPTCHA_KEY` with your reCAPTCHA site key.
- `SITE_RECAPTCHA_SECRET` with your reCAPTCHA secret key.

**Important**: the environment variables need to be called `SITE_RECAPTCHA_KEY` and `SITE_RECAPTCHA_SECRET` for the Netlify backend to find them. If you add a `GATSBY_` prefix to the variable names, the Netlify backend won't recognize them, the reCAPTCHA verification will fail, and your form submissions won't be stored.

If you still need the key on the frontend, like shown in this demo, you can simply duplicate the key:

![image](https://res.cloudinary.com/dzltxlm9l/image/upload/v1602520090/recapcha_shndu5.png)
