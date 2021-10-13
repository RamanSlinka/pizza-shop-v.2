import React, {FC, useCallback, useEffect, useState} from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../store/actions/filters";
import {fetchPizzas, itemType} from "../store/actions/pizzas";





const itemsCategories = [
    {id: 1, value: 'Все'},
    {id: 2, value: 'Мясные'},
    {id: 3, value: 'Вегетарианская'},
    {id: 4, value: 'Гриль'},
    {id: 5, value: 'Острые'},
    {id: 6, value: 'Закрытые'},
]

const Home: FC = () => {

    const [activeItem, setActiveItem] = useState(1)
    const items = useSelector((store: any) => store.pizzas.items)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas())


    }, []);


    const onSelectCategory = useCallback((index: number) => {
        dispatch(setCategory(index))
    }, [])

    return (

        <div className="container">
            <div className="content__top">

                <Categories
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    items={itemsCategories}
                    onClickItem={onSelectCategory}
                />

                <SortPopup
                    itemsSort={[
                        {name: 'популярности', type: 'popular'},
                        {name: 'цене', type: 'price'},
                        {name: 'алфавиту', type: 'alphabet'}
                    ]}
                />


            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((item: itemType) =>
                    <PizzaBlock
                        key={item.id}
                        {...item}
                    />
                )}


            </div>
        </div>


    )
};

export default Home;