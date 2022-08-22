import React, {FC} from 'react';
import {Button, Modal} from "react-bootstrap";
import imageSuccess  from '../../assets/img/payment-success.png'
import {NavLink} from "react-router-dom";
import {PATH} from "../RoutesPage";

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
                <Modal.Footer style={{display:"flex", justifyContent: 'space-between'}}>
                    <NavLink to={PATH.FEEDBACK} style={{color: 'red', fontSize: '13px'}}> Put comments or suggestions
                        <span style={{fontSize:'20px', paddingLeft: '10px'}}>&#8592;</span>
                    </NavLink>
                    <Button variant="outline-success" onClick={handleClose}>
                        Ok
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PaymentSuccess;