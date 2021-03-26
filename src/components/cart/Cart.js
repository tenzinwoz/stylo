import React, { useState } from 'react';
import {
    Grid,
    Container,
    makeStyles,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    Paper,
    Button
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import {
    Remove,
    Add
} from '@material-ui/icons';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IconButton } from '@material-ui/core';
import { incrementProduct, decrementProduct, deleteProductById } from '../../redux/actions/CartAction';
import { Divider } from '@material-ui/core';
import PaymentBox from './PaymentBox';
import { withSnackbar, useSnackbar } from 'notistack'


const useStyles = makeStyles((theme) => ({
    tableHead: {
        backgroundColor: theme.palette.primary.main
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
    summaryBox: {
        padding: theme.spacing(2, 3),
    }

}))

const headings = ["Picture", "Name", "Price", "Inc/Dec", "Total Price", "Remove"]

export default function Cart() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const { products, totalQuantity, totalPrice } = useSelector((state) => state.CartReducer);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleCheckout = (variant) => {
        setButtonDisabled(true)
        enqueueSnackbar('Stripe implementation on process!!', { variant })
        setButtonDisabled(false)
    }

    return (
        <Container style={{ marginTop: "30px" }}>
            <Grid container spacing={2}>
                <Grid item lg={9} md={7} xs={12}>
                    <Table>
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                {
                                    headings.map((heading, index) => (
                                        <TableCell key={index} align="center" style={{ color: "#fff" }}><b>{heading}</b></TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.map((product) => (
                                    <TableRow>
                                        <TableCell align="center">
                                            <div style={{ maxWidth: "100px" }}>
                                                <img src={`/images/${product.image}`} alt="Product" width="100%" />
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">{product.name}</TableCell>
                                        <TableCell align="center">{currencyFormatter.format(product.discountPrice, { code: 'USD' })}</TableCell>
                                        <TableCell align="center">
                                            <div className={classes.product_incdec}>
                                                <div style={{ display: "flex" }}>
                                                    <div
                                                        className={classes.incDecIcon}
                                                        onClick={() => { dispatch(decrementProduct(product.id)) }}
                                                    ><Remove /></div>
                                                    <div className={classes.product_quan}><Typography>{product.quantity}</Typography> </div>
                                                    <div
                                                        className={classes.incDecIcon}
                                                        onClick={() => { dispatch(incrementProduct(product.id)) }}
                                                    ><Add /></div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">{currencyFormatter.format(product.discountPrice * product.quantity, { code: 'USD' })}</TableCell>
                                        <TableCell align="center">
                                            <IconButton color="primary" onClick={() => dispatch(deleteProductById(product.id))}>
                                                <DeleteOutlineIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item lg={3} md={5} xs={12}>
                    <Paper className={classes.summaryBox} elevation={3}>
                        <Typography align="center" >Summary</Typography>
                        <Divider style={{ margin: "10px 0px 10px 0px" }} />
                        <Grid container spacing={1}>
                            <Grid item lg={6} md={6} xs={12}>
                                <Typography><b>Total Items</b></Typography>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}>
                                <Typography>{totalQuantity}</Typography>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}>
                                <Typography><b>Total Amount</b></Typography>
                            </Grid>
                            <Grid item lg={6} md={6} xs={12}>
                                <Typography>{currencyFormatter.format(totalPrice, { code: 'USD' })}</Typography>
                            </Grid>
                        </Grid>
                        <Button
                            fullWidth
                            color="primary"
                            variant="contained"
                            margin="normal"
                            style={{ marginTop: '20px' }}
                            onClick={() => handleCheckout("success")}
                            disabled={buttonDisabled}
                        >
                            Check Out
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            {/* <PaymentBox /> */}
        </Container>
    )
}
