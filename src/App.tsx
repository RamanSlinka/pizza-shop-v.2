import React, {FC, useEffect} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from "./store/actions/pizzas";

const App:FC = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
               .then(({data}) => {
               dispatch(setPizzas(data.pizzas))
            })
    }, []);


    return (

        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path={'/'} component={Home} exact/>
                <Route path={'/cart'} component={Cart} exact/>

            </div>
        </div>


    );
}

export default App;
