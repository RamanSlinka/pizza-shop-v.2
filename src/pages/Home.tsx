import React, {FC, useEffect} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../store/actions/pizzas";
import PizzaLoadingBlock from "../components/pizzaBlock/PizzaLoadingBlock";
import {AppRootStateType} from "../store";
import {addPizzaToCart} from "../store/actions/cart";
import {itemType, newItemsType} from "../store/reducers/cart";
import CarouselPage from '../components/CarouselPage';


const Home: FC = React.memo(() => {

    const items = useSelector<AppRootStateType, Array<itemType>>((store) =>
        store.pizzas.items)

    const rating = useSelector<AppRootStateType, any>((store) =>
        store.pizzas.sortBy)

    const isLoaded = useSelector<AppRootStateType, boolean>((store) =>
        store.pizzas.isLoaded)

    const cartItems = useSelector<AppRootStateType, any>(store => store.cart.itemsCart)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas(rating))
    }, [rating]);


    const handleAddPizzaToCart = (obj: newItemsType) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div>
            <CarouselPage/>
            <div className="container_1">
                <div className="content__top">

                    <Categories/>
                    <SortPopup/>


                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                    {isLoaded
                        ? items.map((item: itemType) =>

                            <PizzaBlock
                                onClickAddPizza={handleAddPizzaToCart}
                                addedCount={cartItems[item._id] && cartItems[item._id].length}
                                key={item._id}
                                {...item}  />)

                        : Array(12).fill(0).map((_, index: number) =>
                            <PizzaLoadingBlock key={index}/>)}
                </div>
            </div>
        </div>
    )
});

export default Home;