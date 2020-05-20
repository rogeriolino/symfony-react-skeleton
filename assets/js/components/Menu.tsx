import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../context'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    makeStyles,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import InboxIcon from '@material-ui/icons/Inbox'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

type Props = {
    brand: string
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    drawer: {
        width: 250,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
    

export const Menu: React.FC<Props> = ({ brand }) => {
    // TODO athenticated user menu
    const { state } = React.useContext(AppContext)
    const [open, setOpen] = React.useState(false);
    const history = useHistory()
    const classes = useStyles()

    return (<div>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {brand}
                </Typography>
                <Button color="inherit">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <div
                role="presentation"
                className={classes.drawer}
                onClick={() => setOpen(false)}
                onKeyDown={() => setOpen(false)}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={() => history.push('/icons')}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Icons" />
                    </ListItem>
                </List>
            </div>
        </Drawer>
    </div>)
}