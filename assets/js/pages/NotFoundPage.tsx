import React from "react"
import { Helmet } from 'react-helmet-async'
import { Jumbotron } from "reactstrap"
import { useHistory } from "react-router-dom"

type Props = {}

export const NotFoundPage: React.FC<Props> = () => {
    const history = useHistory()

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found | Vitrine</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Jumbotron>
                <h1 className="display-3">Oops!</h1>
                <p className="lead">Page not found.</p>
                <hr className="my-2" />
                <p className="lead">
                    <a href="#" className="btn btn-primary" onClick={() => history.goBack()}>Go back</a>
                </p>
            </Jumbotron>
        </div>
    )
}
