import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { navigate } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'


const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === 'undefined') {
    throw new Error(`
  You probably forget to set it in your variables. 
  `)
}

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default function Contact() {
    const [state, setState] = React.useState({})
    const recaptchaRef = React.createRef()

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const recaptchaValue = recaptchaRef.current.getValue()
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                'g-recaptcha-response': recaptchaValue,
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    return (
        <Layout>
            <SEO title="Kontakt" description="Kontaktsidan" />
            <section className="contact-page">
                <article className="contact-form">
                    <h3>kontakta mig</h3>
                    <form
                        name="contact-recaptcha"
                        method="post"
                        action="/thanks/"
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        onSubmit={handleSubmit}
                    >
                        <noscript>
                            <p>This form won’t work with Javascript disabled</p>
                        </noscript>

                        <input type="hidden" name="form-name" value="contact" />
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="namn"
                                name="name"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                placeholder="e-post"
                                name="email"
                                className="form-control"
                                required
                                onChange={handleChange}
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="meddelande"
                                className="form-control"
                                required
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} className="form-recapcha" />
                        <button type="submit" className="submit-btn btn">
                            Kontakta mig
                    </button>
                    </form>
                </article>
            </section>
        </Layout>
    )
}                       