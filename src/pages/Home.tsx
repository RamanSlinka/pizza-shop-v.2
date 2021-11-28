import React, {FC, useCallback, useEffect} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../store/actions/filters";
import {fetchPizzas, itemType} from "../store/actions/pizzas";
import PizzaLoadingBlock from "../components/pizzaBlock/PizzaLoadingBlock";
import {AppRootStateType} from "../store";
import {addPizzaToCart} from "../store/actions/cart";
import {newItemsType} from "../store/reducers/cart";


const itemsCategories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые', 'Смесь']


const Home: FC = React.memo(() => {


    const items = useSelector((store: any) =>
        store.pizzas.items)

    const isLoaded = useSelector<AppRootStateType>((store) =>
        store.pizzas.isLoaded)
    const {category, sortBy} = useSelector((store: any) =>
        store.filters)

    const cartItems = useSelector((store: any) =>
        store.cart.itemsCart)

    //  console.log(cartItems)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy,]);


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

        <div className="container">
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
                        {name: 'популярности', type: 'popular', order: 'desc'},
                        {name: 'цене', type: 'price', order: 'desc'},
                        {name: 'алфавиту', type: 'name', order: 'asc'}
                    ]}
                />


            </div>
            <h2 className="content__title">Все пиццы</h2>
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


    )
});

export default Home;