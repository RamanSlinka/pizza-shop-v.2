import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {fetchPizzas, filterPizzas, setFilterCategory} from "../store/actions/pizzas";


const Categories: FC = React.memo(() => {

    const itemsCategories = ['Meat', 'Vegetarian', 'Spicy']

    const activeCategory = useSelector<AppRootStateType, any>((store) =>
        store.pizzas.category)
    const rating = useSelector<AppRootStateType, any>((store) =>
        store.pizzas.sortBy)


    const dispatch = useDispatch();

    const onSelectCategory = useCallback((index: string | null) => {

        dispatch(setFilterCategory(index))
        dispatch(filterPizzas(index))

    }, []);


    const onResetFilter = useCallback(() => {
         dispatch(fetchPizzas(rating))
        dispatch(setFilterCategory(null))
    }, [])

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : ""}
                    onClick={() => onResetFilter()}
                >
                    All
                </li>
                {itemsCategories && itemsCategories.map((name, index) =>
                    <li
                        className={activeCategory == index ? "active" : ""}
                        onClick={() => {
                            const indexToString = index.toString()
                            onSelectCategory(indexToString)
                        }}
                        key={index}
                    >{name}
                    </li>
                )}
            </ul>
        </div>
    );
});

export default Categories;