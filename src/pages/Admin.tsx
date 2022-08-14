import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreatePizza from "../components/modals/CreatePizza";


const Admin = () => {

    const [name, setName] = useState('')
    console.log(name)

    const [category, setCategory] = useState('enter category')
    console.log(category)

    const [price, setPrice] = useState(0)
    console.log(price)

    const [rating, setRating] = useState(10)
    console.log(rating)
    const [imageUrl, setImageUrl] = useState(false)

    const [visible, setVisible] = useState(false)

    return (
        <Container className={'m-xxl-5'}>
            {/*<Button onClick={() => setNameVisible(true)} > Add name</Button>*/}
            {/*<Button onClick={() => setTypeVisible(true)}> Add types</Button>*/}
            {/*<Button onClick={() => setSizeVisible(true)}> Add size</Button>*/}
            {/*<Button onClick={() => setPriceVisible(true)}> Add price</Button>*/}
            {/*<Button onClick={() => setRatingVisible(true)}> Add rating</Button>*/}
            {/*<Button onClick={() => setImageUrlVisible(true)}> Add imageUrl</Button>*/}

            <Button onClick={() => setVisible(true)}> Create new pizza</Button>




            <CreatePizza
                name={name}
                addName={setName}

                category={category}
                addCategory={setCategory}

                addPrice={setPrice}
                addRating={setRating}
                addImageUrl={setImageUrl}

                show={visible}
                onHide={() =>setVisible(false)}
            />


            {/*<CreateName*/}
            {/*    show={nameVisible}*/}
            {/*    onHide={() => setNameVisible(false)}*/}
            {/*/>*/}
            {/*<CreateImage*/}
            {/*    show={imageUrlVisible}*/}
            {/*    onHide={() => setImageUrlVisible(false)}*/}
            {/*/>*/}
            {/*<CreatePrice*/}
            {/*    show={priceVisible}*/}
            {/*    onHide={() => setPriceVisible(false)}*/}
            {/*/>*/}
            {/*<CreateRating*/}
            {/*    show={ratingVisible}*/}
            {/*    onHide={() => setRatingVisible(false)}*/}
            {/*/>*/}
            {/*<CreateSize*/}
            {/*    show={sizeVisible}*/}
            {/*    onHide={() => setSizeVisible(false)}*/}
            {/*/>*/}
            {/*<CreateType*/}
            {/*    show={typeVisible}*/}
            {/*    onHide={() => setTypeVisible(false)}*/}
            {/*/>*/}

        </Container>
    );
};

export default Admin;