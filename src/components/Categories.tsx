import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {setFilterCategory} from "../store/actions/pizzas";

type CategoriesPropsType = {
    // items:  string []
    // onClickItem: (index: number | null) => void
    // activeCategory: number
}


const Categories: FC = React.memo(() => {

    const itemsCategories = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed(sorry)', 'Mix']
    const activeCategory = useSelector<AppRootStateType, any>((store) =>
        store.pizzas.category)
    console.log({activeCategory})
    const dispatch = useDispatch();
    const onSelectCategory = useCallback((index: number | null) => {
        dispatch(setFilterCategory(index))
    }, []);

    const onSelectItem = (index: number | null) => {
        onSelectCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : ""}
                    // onClick={() => onClickItem(null)}
                >
                    All
                </li>
                {itemsCategories && itemsCategories.map((name, index) =>
                    <li
                        className={ activeCategory === index ? "active" : ""}
                        onClick={() => onSelectItem(index)}
                        key={index}
                    >{name}
                    </li>
                )}
            </ul>
        </div>
    );
});

export default Categories;