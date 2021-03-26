import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import InjectedCheckoutForm from './CheckoutForm';

const stripePromise = loadStripe("pk_test_51IYsX9SCay6pI3eptV44pBhkfIlsuptKLXw33iS6rlImQqrc54gZz5qdLtRBLSwj2uC6PEvdP5W9MQwo9UOZ7zhU00HVNETcC4")

export default function PaymentBox() {

    return (
        <Elements stripe={stripePromise}>
            <InjectedCheckoutForm />
        </Elements>
    )
}
