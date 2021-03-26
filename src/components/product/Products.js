import { Typography, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import NewArrival from '../home/NewArrival';

const useStyles = makeStyles((theme) => ({
    heading: {
        padding: theme.spacing(3)
    }
}))
export default function Products() {
    const classes = useStyles();
    return (
        <Container>
            <Typography variant="h1" align="center" className={classes.heading}>All Products</Typography>
            <NewArrival />
        </Container>
    )
}
