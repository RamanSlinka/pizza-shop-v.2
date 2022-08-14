import React, {FC, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";

const CreatePizza:FC<any> = ({show, onHide, addName, category, addCategory}) => {


// const [value, setValue] = useState('')

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
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                                Enter category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={addCategory('0')}>Meat (0)</Dropdown.Item>
                                <Dropdown.Item onClick={addCategory('1')}>Vegetarian (1)</Dropdown.Item>
                                <Dropdown.Item onClick={addCategory('2')}>Spicy (2)</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form.Control className="Control"
                                       onChange={(e) => addName(e.target.value)}
                              placeholder={'Enter name of pizza'}
                        />

                        <Form.Control className="Control"
                              placeholder={'Enter URL image of pizza'}
                        />
                        <Form.Control className="Control"
                              placeholder={'Enter price of pizza'}
                        />
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

export default CreatePizza;