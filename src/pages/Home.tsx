import React, {FC, useEffect} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas, itemType} from "../store/actions/pizzas";
import PizzaLoadingBlock from "../components/pizzaBlock/PizzaLoadingBlock";
import {AppRootStateType} from "../store";
import {addPizzaToCart} from "../store/actions/cart";
import {newItemsType} from "../store/reducers/cart";
import CarouselPage from '../components/CarouselPage';


const Home: FC = React.memo(() => {

    const items = useSelector<AppRootStateType, Array<itemType>>((store) =>
        store.pizzas.items)

    const isLoaded = useSelector<AppRootStateType, boolean>((store) =>
        store.pizzas.isLoaded)


    const cartItems = useSelector((store: any) => store.cart.itemsCart)

    //  console.log(cartItems)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas())
    }, []);


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
                                addedCount={cartItems[item.id] && cartItems[item.id].length}
                                key={item.id}
                                {...item}  />)

                        : Array(12).fill(0).map((_, index: number) =>
                            <PizzaLoadingBlock key={index}/>)}


                </div>
            </div>

        </div>
    )
});

export default Home;