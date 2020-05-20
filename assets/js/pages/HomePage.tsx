import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
    Container,
    Typography,
    Grid,
    Button,
} from '@material-ui/core'

type Props = {}

export const HomePage: React.FC<Props> = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Symfony+React</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Hello, world!
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.
                </Typography>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary">
                            Primary button
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary">
                            Secondary button
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}