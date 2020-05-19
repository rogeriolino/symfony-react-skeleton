import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Jumbotron } from 'reactstrap'
import { Button } from 'reactstrap'

type Props = {}

export const HomePage: React.FC<Props> = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Symfony+React</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Jumbotron>
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <Button color="primary">Primary button</Button>
                    <Button color="secondary" outline={true} className="ml-2">Secondary outline button</Button>
                </p>
            </Jumbotron>
        </div>
    )
}