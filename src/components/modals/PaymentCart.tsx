import React, {FC} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {clearCart} from "../../store/actions/cart";
import {useDispatch} from "react-redux";

type PaymentCartPropsType = {
    show: boolean
    handleClose: () => void
    handleShowSuccess: () => void
}


const PaymentCart: FC<PaymentCartPropsType> = ({show, handleClose, handleShowSuccess}) => {

    const elements = useElements();
    const stripe = useStripe();
    const dispatch = useDispatch()
    const onClickHandleSuccess = () => {
        handleClose()
        setTimeout(() => {
            handleShowSuccess()
            dispatch(clearCart())
        }, 2000)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        alert('Creating payment intent...');

        // Create payment intend on the server
        const {error: backendError, clientSecret}: any = await fetch('create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                paymentMethodType: 'card',
                currency: 'eur'
            }),
        }).then(r => r.json());
        if (backendError) {
            alert(backendError.message)
            return;
        }
        alert('Payment intent created')

        // Confirm the payment on the client


        const {error: stripeError, paymentIntent} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method: {
                    // @ts-ignore
                    card: elements.getElement(CardElement)
                }
            }
        )
        if (stripeError) {
            alert(stripeError.message)
            return;
        }
        alert(`PaymentIntend (${paymentIntent?.id}) : (${paymentIntent?.status})`)
    }
    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <Form
                    id="payment-form"
                    onSubmit={handleSubmit}>
                    <Modal.Body>

                        <label htmlFor="card-element">Card</label>

                        <CardElement id="card-element"/>


                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="outline-success"
                                type='submit'
                                onClick={onClickHandleSuccess}>
                            Pay now
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};

export default PaymentCart;