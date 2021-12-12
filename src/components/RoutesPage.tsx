import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Contacts from "../pages/Contacts";
import SalePage from "../pages/SalePage";
import WelcomePage from "../pages/WelcomePage";
import AboutApp from "./AboutApp";

export const PATH = {
    HOME: '/',
    ABOUT_US: '/about_us',
    ABOUT_APP: '/about_app',
    CART: '/cart',
    CONTACTS: '/contacts',
    SALE: '/sale',
    WELCOME: '/pizza-shop-v.2'
}


const RoutesPage = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<Home/>}/>
            <Route path={PATH.ABOUT_US} element={<AboutUs/>}/>
            <Route path={PATH.ABOUT_APP} element={<AboutApp/>}/>
            <Route path={PATH.CONTACTS} element={<Contacts/>}/>
            <Route path={PATH.CART} element={<Cart/>}/>
            <Route path={PATH.SALE} element={<SalePage/>}/>
            <Route path={PATH.WELCOME} element={<WelcomePage/>}/>
            <Route path={PATH.WELCOME} element={<WelcomePage/>}/>
        </Routes>
    );
}

export default RoutesPage;