import React, {ChangeEvent, FC} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";


const CreatePizza: FC<any> = ({
                                  show, onHide, name, addName,
                                   addCategory, rating, addRating,
                                  price, addPrice, imageUrl, addImageUrl, submit
                              }) => {


    const ratingHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addRating(+e.target.value)
    }


    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create new pizza
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        Category:
                        <Dropdown>

                            <Dropdown.Toggle variant="outline-success" id="dropdown-basic" className='mb-2'>
                                Enter category
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => addCategory(0)}>Meat </Dropdown.Item>
                                <Dropdown.Item onClick={() => addCategory(1)}>Vegetarian </Dropdown.Item>
                                <Dropdown.Item onClick={() => addCategory(2)}>Spicy </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        Name:
                        <Form.Control className="Control mb-2"
                                      value={name}
                                      onChange={(e) => addName(e.target.value)}
                                      placeholder={'Enter name of pizza'}
                        />
                        Image (URL):
                        <Form.Control className="Control mb-2"
                                      value={imageUrl}
                                      onChange={(e) => addImageUrl(e.target.value)}
                                      placeholder={'Enter URL image of pizza'}
                        />
                        Price:
                        <Form.Control className="Control mb-2"
                                      value={price}
                                      onChange={(e) => addPrice(+e.target.value)}
                                      placeholder={'Enter price of pizza'}
                        />
                        <>
                            <Form.Label>Enter rating: {rating}</Form.Label>
                            <Form.Range
                                value={rating}
                                onChange={ratingHandler}

                            />
                        </>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"outline-success"} onClick={submit}>Add</Button>
                    <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreatePizza;