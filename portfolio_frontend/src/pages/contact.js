import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
    return (
        <Layout>
            <SEO title="Kontakt" description="Kontaktsidan" />
            <section className="contact-page">
                <article className="contact-form">
                    <h3>kontakta mig</h3>
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="namn"
                                name="name"
                                className="form-control"
                            />
                            <input
                                type="email"
                                placeholder="epost"
                                name="email"
                                className="form-control"
                            />
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="meddelande"
                                className="form-control"
                            ></textarea>
                        </div>
                        <div className="form-recaptcha">
                            <div data-netlify-recaptcha="true">ff</div>
                        </div>
                        <button type="submit" className="submit-btn btn">
                            Kontakta mig
                        </button>
                    </form>
                </article>
            </section>
        </Layout>
    )
}

export default contact                       