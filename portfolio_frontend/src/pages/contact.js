import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { navigate } from 'gatsby'
import Recaptcha from 'react-google-recaptcha'
import styled from "styled-components"

const StyledRecaptcha = {
    padding: '0 1.5rem',
    textAlign: 'center',
}

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === 'undefined') {
    throw new Error("You probably forget to set it in your variables.")
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
            <StyledContactPage>
                <StyledContactForm>
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
                        <StyledFormGroup>
                            <StyledFormControl
                                type="text"
                                placeholder="namn"
                                name="name"
                                required
                                onChange={handleChange}
                            />
                            <StyledFormControl
                                type="email"
                                placeholder="e-post"
                                name="email"
                                required
                                onChange={handleChange}
                            />
                            <StyledFormControlArea
                                name="message"
                                rows="5"
                                placeholder="meddelande"
                                required
                                onChange={handleChange}
                            ></StyledFormControlArea>
                        </StyledFormGroup>
                        <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} style={StyledRecaptcha} />
                        <StyledSubmitBtn type="submit">
                            Kontakta mig
                        </StyledSubmitBtn>
                    </form>
                </StyledContactForm>
            </StyledContactPage>
        </Layout>
    )
}

const StyledContactPage = styled.section`
    background: ${props => props.theme.colors.grey10};
    min-height: calc(100vh - 5rem - 9rem);
    display: grid;
    place-items: center;
    padding: 5rem 0;
`
const StyledContactForm = styled.article`
    background:  ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.radius.small};
    text-align: center;
    box-shadow: ${props => props.theme.shadows.lightShadow};
    transition:  ${props => props.theme.animations.transition};
    width: 90vw;
    max-width: 35rem;
    :hover {
        box-shadow: ${props => props.theme.shadows.darkShadow};
    }

    h3 {
        letter-spacing: ${props => props.theme.spacings.small};
        text-transform: capitalize;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        font-family: ${props => props.theme.colors.primary};
        padding-top: 1.25rem;
        color: ${props => props.theme.colors.grey5};
        font-size: 1.25rem;

        @media screen and (min-width: 800px) {
            font-size: 1.25rem;
            line-height: 1;
        }
    }
`
const StyledFormGroup = styled.div`
    padding: 1rem 1.5rem;  
`
const StyledFormControl = styled.input`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background:  ${props => props.theme.colors.grey10};
    border-radius:  ${props => props.theme.radius.small};
    text-transform: uppercase;
    letter-spacing:  ${props => props.theme.spacings.xxSmall};

    ::placeholder {
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.grey1};
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.spacings.xxSmall};
    }
`

const StyledFormControlArea = styled.textarea`
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background:  ${props => props.theme.colors.grey10};
    border-radius:  ${props => props.theme.radius.small};
    text-transform: uppercase;
    letter-spacing:  ${props => props.theme.spacings.xxSmall};

    ::placeholder {
        font-family: ${props => props.theme.fonts.primary};
        color: ${props => props.theme.colors.grey1};
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.spacings.xxSmall};
    }
`

const StyledSubmitBtn = styled.button`
    width: 100%;
    border-bottom-left-radius: ${props => props.theme.radius.small};
    border-bottom-right-radius: ${props => props.theme.radius.small};
    border-top-right-radius: 0;
    border-top-left-radius: 0;

    text-transform: uppercase;
    background: ${props => props.theme.colors.primary5};
    color: ${props => props.theme.colors.primary9};
    padding: 0.375rem 0.75rem;
    letter-spacing: ${props => props.theme.spacings.xxSmall};
    display: inline-block;
    font-weight: 700;
    -webkit-transition: ${props => props.theme.animations.transition};
    transition: ${props => props.theme.animations.transition};
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: ${props => props.theme.shadows.darkShadow};
    border-radius:${props => props.theme.radius.small};
    text-decoration: none;
    padding: 0.6rem 1.2rem;

    :hover {
        color: ${props => props.theme.colors.primary1};
        background: ${props => props.theme.colors.primary8};
        box-shadow: ${props => props.theme.shadows.darkShadow};
    }
`