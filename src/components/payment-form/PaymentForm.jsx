import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import './PaymentForm.scss'
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";
import { useState } from "react";


const PaymentForm = () => {

    const stripe = useStripe();

    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

    const [isProccessingPayment, setIsProccessingPayment] = useState(false);

    const paymentHandler = async(e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        setIsProccessingPayment(true);

        const response = await fetch('./vercel/functions/create-payments', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then(res => res.json())

        const {paymentIntent: {clientSecret}} = response;

        const  paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "default"
                }
            }
        });
        
        setIsProccessingPayment(false);

        if(paymentResult.error){
            alert(paymentResult.error)
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('Payment result')
            }
        }
    }

    return (
        <div className="payment-container">
            <div className="form-container" onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement/>
                <Button disabled={isProccessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
            </div>
        </div>
    )
}

export default PaymentForm;