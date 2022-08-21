import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {setFilterSortBy} from "../store/actions/pizzas";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store";



const SortPopup: FC = React.memo(() => {
    const itemsSort = [
        {name: 'rating', type: 'rating', order: 'desc'},
        {name: 'price', type: 'price', order: 'desc'},
        {name: 'name', type: 'name', order: 'asc'}
    ]
    const [visiblePopup, setVisiblePopup] = useState(false);

    const sortRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const sortBy = useSelector<AppRootStateType, any>((store) =>
        store.pizzas.sortBy)
    const dispatch = useDispatch();

    const onSelectSortType = useCallback((type: string ) => {
        dispatch(setFilterSortBy(type))
    }, [])

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const onSelectItem = (type: string ) => {
        onSelectSortType(type)
        setVisiblePopup(false);
            }

    const activeLabel = itemsSort?.find(obj => obj.type === sortBy)?.name;

    const handleOutsideClick = (e: any) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [visiblePopup])

    return (
        <div ref={sortRef}
             className="sort">
            <div className="sort__label">
                <svg
                    className={visiblePopup ? 'rotated' : ''}
                    width="10" height="6" viewBox="0 0 10 6" fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Sort all by:</b>
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            {visiblePopup &&
                <div className="sort__popup">
                    <ul>
                        {itemsSort && itemsSort.map((obj, index) =>
                            <li
                                className={sortBy === obj.type ? "active" : ""}
                                key={index}
                                onClick={() => {
                                    onSelectItem(obj.type)
                                }}
                            >{obj.type}</li>)}

                    </ul>
                </div>
            }

        </div>
    );
});

export default SortPopup;