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
```
<form action="https://formspree.io/f/xxxx"method="POST"> 
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
12. In the frontend run `gatsby develop` and keep running the backend_portfolio in the background to fetch data from strapi.
