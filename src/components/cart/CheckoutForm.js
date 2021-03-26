import React from 'react';
import { Button } from '@material-ui/core'
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js'

const CheckoutForm = ({ stripe, elements }) => {
    return (
        <div>
            <Button>Buy Now</Button>
        </div>
    )
}

export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {
                ({ stripe, elements }) => (
                    <CheckoutForm stripe={stripe} elements={elements} />
                )
            }
        </ElementsConsumer>
    )
}
