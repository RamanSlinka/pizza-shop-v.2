import React, {useEffect, useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreatePizza from "../components/modals/CreatePizza";
import {createNewPizza} from "../store/actions/pizzas";
import {auth} from "../store/actions/auth";
import {useDispatch} from "react-redux";


const Admin = () => {
    const dispatch = useDispatch()
    // const availableTypes = ["thin dough", "traditional dough"];
    // const availableSizes = [26, 30, 40];
    // const [activeType, setActiveType] = useState<any>(0);
    // const [activeSize, setActiveSize] = useState(0);
    useEffect(() => {
        dispatch(auth())
    }, [])
    const [name, setName] = useState<string>('enter name')
    console.log(name)

    const [category, setCategory] = useState(0)
    // console.log(category)

    const [price, setPrice] = useState< number>(0)
    // console.log(price)

    const [rating, setRating] = useState(0)
    console.log(rating)
    const [imageUrl, setImageUrl] = useState("https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg")

    const [visible, setVisible] = useState(false)

    const newPizza = new Object({
        name, category,
        imageUrl, price, rating,
        sizes: [26, 30, 40],
        types: [0, 1]
    })


    console.log(newPizza)

    const categoryHandler = (category: any) => {
        if (category === 0 ) {
        return 'Meet'
        } else if(category === 1) {
            return 'Vegetarian'
        } else {
            return 'Spicy'
        }
    }

    const submitNewPizza = () => {
      const  sizes = [26, 30, 40]
        const     types=  [0, 1]
        createNewPizza(  imageUrl,
            name,
            types,
            sizes,
            price,
            category,
            rating
           )
        setTimeout( () => {
            setVisible(false)
        }, 1000)
    }

    return (
        <Container className={'m-xxl-5'}>


            <div style={{display: "flex", flexDirection: "column", padding: "20px"}}>
                <Button onClick={() => setVisible(true)} variant="outline-primary"> Create new pizza</Button>
                <div className="pizza-block mt-4 border-success">
                    <img
                        className="pizza-block__image"
                        src={imageUrl}
                        alt="Pizza"
                    />

                    <div>
                        <h4 className="pizza-block__title">Name: {name}</h4>
                        <h4>Category: {categoryHandler(category)}</h4>
                        <h4>Rating: {rating}</h4>
                        <h4 className="pizza-block__price">Price: {price} $</h4>

                    </div>


                </div>
            </div>


            <CreatePizza
                name={name}
                addName={setName}

                category={category}
                addCategory={setCategory}

                price={price}
                addPrice={setPrice}

                imageUrl={imageUrl}
                addImageUrl={setImageUrl}

                rating={rating}
                addRating={setRating}


                show={visible}
                onHide={() => setVisible(false)}
                submit={submitNewPizza}
            />


        </Container>
    );
};

export default Admin;