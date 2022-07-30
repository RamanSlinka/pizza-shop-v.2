import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {fetchPizzas, setFilterCategory} from "../store/actions/pizzas";

type CategoriesPropsType = {
    // items:  string []
    // onClickItem: (index: number | null) => void
    // activeCategory: number
}


const Categories: FC = React.memo(() => {

    const itemsCategories = ['Meat', 'Vegetarian',  'Spicy']

    const activeCategory = useSelector<AppRootStateType, any>((store) =>
        store.pizzas.category)
    console.log({activeCategory})

    const dispatch = useDispatch();

    const onSelectCategory = useCallback((index: number | null) => {
        dispatch(fetchPizzas())
        setTimeout(() =>{
            dispatch(setFilterCategory(index))
        },100 )

    }, []);


    const onResetFilter = useCallback(() => {
        dispatch(fetchPizzas())
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
                        className={ activeCategory === index ? "active" : ""}
                        onClick={() => onSelectCategory(index)}
                        key={index}
                    >{name}
                    </li>
                )}
            </ul>
        </div>
    );
});

export default Categories;