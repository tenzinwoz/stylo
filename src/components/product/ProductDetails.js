import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneProductById } from '../../redux/actions/ProductsActions';
import {
    Grid,
    makeStyles,
    Container,
    Button,
    Breadcrumbs
} from '@material-ui/core';
import {
    Remove,
    Add
} from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import currencyFormatter from 'currency-formatter';
import { addToCart } from '../../redux/actions/CartAction';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        marginTop: theme.spacing(5)
    },
    imageHolder: {
        maxWidth: "400px",
        margin: '0 auto'
    },
    product_info: {
        padding: theme.spacing(0, 3)
    },
    product_incdec: {
        display: 'flex',
        marginTop: theme.spacing(2),
        justifyContent: 'space-between'
    },
    incDecIcon: {
        border: "1px solid #000",
        padding: theme.spacing(1, 2),
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: "grey",
            color: "white"
        }
    },
    product_quan: {
        border: '1px solid #000',
        borderLeft: 'none',
        borderRight: 'none',
        padding: theme.spacing(1, 2),

    },
    breadCrumb: {
        margin: theme.spacing(0, 0, 3, 0)
    }
}))


export default function ProductDetails() {
    const classes = useStyles();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state.ProductsReducer);
    const [quantity, setQuantity] = useState(1);
    if (quantity < 0) {
        setQuantity(0)
    }

    useEffect(() => {
        dispatch(getOneProductById(id));
        console.log("i am called")
    }, [dispatch]);

    const handleAddToCart = () => {
        dispatch(addToCart(product, quantity))
    }

    return (
        <Container className={classes.mainContainer}>

            <Grid container>
                <Grid item xs={12}>
                    <div>
                        <Breadcrumbs className={classes.breadCrumb}>
                            <Link to="/products" style={{ color: 'grey' }} >
                                Products
                             </Link>
                            <Typography color="textPrimary">{product.name}</Typography>
                        </Breadcrumbs>
                    </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <div className={classes.imageHolder}>
                        <img src={`/images/${product.image}`} alt="Product" width="100%" />
                    </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    <div className={classes.product_info}>
                        <Typography variant="subtitle1" style={{ textTransform: 'capitalize' }}>{product.name}</Typography>
                        <Typography>
                            <span style={{ textDecoration: 'line-through', marginRight: '10px' }}> {currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>
                            <span> {currencyFormatter.format(product.price, { code: 'USD' })}</span>
                        </Typography>
                        <div className={classes.product_incdec}>
                            <div style={{ display: "flex" }}>
                                <div
                                    className={classes.incDecIcon}
                                    onClick={() => setQuantity(quantity - 1)}
                                ><Remove /></div>
                                <div className={classes.product_quan}><Typography>{quantity}</Typography> </div>
                                <div
                                    className={classes.incDecIcon}
                                    onClick={() => setQuantity(quantity + 1)}
                                ><Add /></div>
                            </div>
                            <div style={{ width: '60%' }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={handleAddToCart}
                                >
                                    ADD TO CART
                                </Button>
                            </div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <Typography variant="subtitle1">Details</Typography>
                            <Typography>{product.desc}</Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
