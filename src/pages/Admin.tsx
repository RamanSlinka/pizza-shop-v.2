import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCategory from "../components/modals/CreateCategory";
import CreateName from "../components/modals/CreateName";
import CreateImage from "../components/modals/CreateImage";
import CreatePrice from "../components/modals/CreatePrice";
import CreateRating from "../components/modals/CreateRating";
import CreateSize from "../components/modals/CreateSize";
import CreateType from "../components/modals/CreateType";

const Admin = () => {

    const [nameVisible, setNameVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [sizeVisible, setSizeVisible] = useState(false)
    const [priceVisible, setPriceVisible] = useState(false)
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [ratingVisible, setRatingVisible] = useState(false)
    const [imageUrlVisible, setImageUrlVisible] = useState(false)

    return (
        <Container className={'m-xxl-5'}>
            <Button onClick={() => setNameVisible(true)} > Add name</Button>
            <Button onClick={() => setTypeVisible(true)}> Add types</Button>
            <Button onClick={() => setSizeVisible(true)}> Add size</Button>
            <Button onClick={() => setPriceVisible(true)}> Add price</Button>
            <Button onClick={() => setCategoryVisible(true)}> Add category</Button>
            <Button onClick={() => setRatingVisible(true)}> Add rating</Button>
            <Button onClick={() => setImageUrlVisible(true)}> Add imageUrl</Button>


            <CreateCategory
                show={categoryVisible}
                onHide={() =>setCategoryVisible(false)}
            />
            <CreateName
                show={nameVisible}
                onHide={() => setNameVisible(false)}
            />
            <CreateImage
                show={imageUrlVisible}
                onHide={() => setImageUrlVisible(false)}
            />
            <CreatePrice
                show={priceVisible}
                onHide={() => setPriceVisible(false)}
            />
            <CreateRating
                show={ratingVisible}
                onHide={() => setRatingVisible(false)}
            />
            <CreateSize
                show={sizeVisible}
                onHide={() => setSizeVisible(false)}
            />
            <CreateType
                show={typeVisible}
                onHide={() => setTypeVisible(false)}
            />
        </Container>
    );
};

export default Admin;