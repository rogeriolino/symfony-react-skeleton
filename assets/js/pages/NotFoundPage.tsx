import React from "react"
import { Helmet } from 'react-helmet-async'
import { useHistory } from "react-router-dom"
import { 
    Container,
    Typography,
    Grid,
    Button,
} from '@material-ui/core'

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
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Oops!
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Page not found.
                </Typography>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="outlined" color="primary" onClick={() => history.push('/')}>
                            Go to home
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
