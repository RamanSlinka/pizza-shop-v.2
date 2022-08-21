import React, {FC} from 'react';
import {Button, Modal} from "react-bootstrap";
import imageSuccess  from '../../assets/img/payment-success.png'

type PaymentSuccessPropsType ={
    show: boolean,
    handleClose: ()=> void
}

const PaymentSuccess:FC<PaymentSuccessPropsType> = ({show, handleClose}) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Payment successful. Thank you!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className='w-50'
                         style={{marginLeft: 'auto', marginRight:'auto', display:'block'}}
                         src={imageSuccess} alt="Success"/>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={handleClose}>
                        Ok
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PaymentSuccess;