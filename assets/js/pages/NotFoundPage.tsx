import React from "react"
import { Helmet } from 'react-helmet-async'
import { Link } from "react-router-dom"

type Props = {}

export const NotFoundPage: React.FC<Props> = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found | Vitrine</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <h1>Oops!</h1>
                <p>Page not found.</p>
                <hr/>
                <Link to="/">Go to home</Link>
            </div>
        </div>
    )
}
