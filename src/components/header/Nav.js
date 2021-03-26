import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
    Badge
} from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Container } from '@material-ui/core';
import companyLogo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#fff",
    },
    logoHolder: {
        maxWidth: "150px",
        flexGrow: '1'
    },
    toolBar: {
        justifyContent: 'space-between'
    },
    navLinks: {
        display: 'flex',
        justifyContent: 'space-around',
        '& p': {
            padding: theme.spacing(2)
        }
    },
}))

export default function Nav() {
    const classes = useStyles();
    const { totalQuantity } = useSelector((state) => state.CartReducer)
    console.log(totalQuantity)
    return (
        <AppBar className={classes.appBar} position="sticky">
            <Container>
                <Toolbar className={classes.toolBar}>
                    <Link to="/">
                        <div className={classes.logoHolder}>
                            <img src={companyLogo} alt="Logo" width="100%" />
                        </div>
                    </Link>
                    <div className={classes.navLinks}>
                        <Link><Typography>About</Typography></Link>
                        <Link to="/products"><Typography>Shop</Typography></Link>
                        <Link><Typography>Blogs</Typography></Link>
                    </div>
                    <Link to="/cart">
                        <Badge
                            badgeContent={parseInt(totalQuantity)}
                            color="secondary"
                        >
                            <LocalMallIcon fontSize="medium" color="primary" />
                        </Badge>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
