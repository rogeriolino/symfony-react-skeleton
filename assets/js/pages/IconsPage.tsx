import * as React from 'react'
import { Helmet } from 'react-helmet'
import * as Icons from 'react-feather'
import '../../css/icons.scss'

type Props = {}

export const IconsPage: React.FC<Props> = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Icons | Symfony+React</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container-fluid p-4">
                <h1 className="h2">Feather Icons</h1>
                <hr/>
                <div className="row icons">
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.Activity />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.Airplay />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.AlertCircle />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.AlertOctagon />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.AlertTriangle />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.AlignCenter />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.AlignJustify />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.AlignLeft />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.AlignRight />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.Anchor />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.Aperture />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.Archive />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        <Icons.Archive />
                    </div>
                    <div className="icon col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1">
                        and more...
                    </div>
                </div>
            </div>
        </div>
    )
}