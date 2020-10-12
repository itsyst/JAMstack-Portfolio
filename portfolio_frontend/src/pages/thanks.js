import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
    return (
        <Layout>
            <main className="thanks-page">
                <div className="thanks-container">
                    <h2>Tack, jag har nu mottagit ditt meddelande och kommer snart att ta kontakt med dig.</h2>
                    <Link to="/" className="btn">
                        Tillbaka Hem
                    </Link>
                </div>
            </main>
        </Layout>
    )
}

export default Error