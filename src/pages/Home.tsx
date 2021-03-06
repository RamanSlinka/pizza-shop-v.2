import React, {FC, useCallback, useEffect} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import { useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../store/actions/filters";
import {fetchPizzas, itemsType, itemType} from "../store/actions/pizzas";
import PizzaLoadingBlock from "../components/pizzaBlock/PizzaLoadingBlock";
import {AppRootStateType} from "../store";
import {addPizzaToCart} from "../store/actions/cart";
import {newItemsType} from "../store/reducers/cart";
import CarouselPage from '../components/CarouselPage';


const itemsCategories = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed(sorry)', 'Mix']


const Home: FC = React.memo(() => {


    const items = useSelector<AppRootStateType, any>(state =>
        state.pizzas.items)

    const isLoaded = useSelector<AppRootStateType>((store) =>
        store.pizzas.isLoaded)
    const {category, sortBy} = useSelector((store: any) =>
        store.filters)

    const cartItems = useSelector((store: any) =>
        store.cart.itemsCart)

    //  console.log(cartItems)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas())
    }, []);


    const onSelectCategory = useCallback((index: number | null) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSortType = useCallback((type: string) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizzaToCart = (obj: newItemsType) => {
        dispatch(addPizzaToCart(obj))
    }

    return (
<div>
    <CarouselPage/>
        <div className="container_1">
            <div className="content__top">

                <Categories
                    activeCategory={category}
                    items={itemsCategories}
                    onClickItem={onSelectCategory}
                />

                <SortPopup
                    onClickSortPopup={onSelectSortType}
                    activeSortType={sortBy}
                    itemsSort={[
                        {name: 'popular', type: 'popular', order: 'desc'},
                        {name: 'price', type: 'price', order: 'desc'},
                        {name: 'name', type: 'name', order: 'asc'}
                    ]}
                />


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