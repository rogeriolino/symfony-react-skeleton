import * as React from "react"
import { Helmet } from 'react-helmet'
import { Jumbotron, Button } from "reactstrap"

type Props = {}

export const NotFoundPage: React.FC<Props> = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found | Symfony+React</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Jumbotron>
                <h1 className="display-3">Oops!</h1>
                <p className="lead">Page not found.</p>
                <hr className="my-2" />
                <p className="lead">
                    <a href="javascript:history.back()" className="btn btn-primary">Go back</a>
                </p>
            </Jumbotron>
        </div>
    )
}