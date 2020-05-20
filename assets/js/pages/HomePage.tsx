import React from 'react'
import { Helmet } from 'react-helmet-async'


type Props = {}

export const HomePage: React.FC<Props> = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Symfony+React</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <h1>Hello, world!</h1>
            </div>
        </div>
    )
}