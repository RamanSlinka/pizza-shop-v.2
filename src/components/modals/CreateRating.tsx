import React, {FC} from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateRating: FC<any> = ({show, onHide}) => {
    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control className="Control"
                              placeholder={'Enter rating of pizza'}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"outline-success"} onClick={onHide}>Add</Button>
                    <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateRating;