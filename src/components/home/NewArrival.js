import React, { useEffect } from 'react'
import {
    Typography,
    Grid,
    Container,
    makeStyles
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../../redux/actions/ProductsActions';

const useStyles = makeStyles((theme) => ({
    product: {
        padding: theme.spacing(2),
        overflow: 'hidden'
    },
    priceInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(1)
    },
    discountPer: {
        color: 'grey',
        marginLeft: '10px'
    },
    imageHolder: {
        transition: 'transform .9s',
        '&:hover': {
            transform: 'scale(1.3)'
        }
    },
    lineThrough: {
        textDecoration: 'line-through'
    }
}))

export default function NewArrival() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.ProductsReducer);

    //Just fetching all products
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    return (
        <Container>
            <Grid container spacing={2}>
                {
                    products.map((product, index) => {
                        return <Grid item lg={4} md={4} sm={12} key={index}>
                            <Link to={`details/${product.id}`}>
                                <div className={classes.product}>
                                    <div style={{ overflow: 'hidden' }}>
                                        <div className={classes.imageHolder}>
                                            <img src={`/images/${product.image}`} width="100%" />
                                        </div>
                                    </div>
                                    <div>
                                        <Typography >{product.name}</Typography>
                                    </div>
                                    <div className={classes.priceInfo}>
                                        <div >
                                            <Typography>
                                                <span className={classes.lineThrough}>{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                                                <span className={classes.discountPer}>{product.discount}%</span>
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography>
                                                {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                    })
                }
            </Grid>
        </Container>
    )
}
