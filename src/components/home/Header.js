import React from 'react';
import {
    makeStyles
} from '@material-ui/core';
import bannerImage from '../../assets/images/banner.webp'

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60vh'
    }
}))

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.header}>

            </div>
        </div>
    )
}
