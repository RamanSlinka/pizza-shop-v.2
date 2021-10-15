import React, {FC} from 'react';

type CategoriesPropsType = {
    items:  string []
    onClickItem: (index: number | null) => void
    activeCategory: number
}


const Categories: FC<CategoriesPropsType> = React.memo(({
                                                            items,
                                                            activeCategory,
                                                            onClickItem
                                                        }) => {
    // const onSelectItem = (index: number | null) => {
    //     onClickItem(index )
    // }

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : ""}
                    onClick={() => onClickItem(null)}
                >
                    All
                </li>
                {items && items.map((name, index) =>
                    <li
                        className={ activeCategory === index ? "active" : ""}
                        onClick={() => onClickItem(index)}
                        key={index}
                    >{name}
                    </li>
                )}
            </ul>
        </div>
    );
});

export default Categories;