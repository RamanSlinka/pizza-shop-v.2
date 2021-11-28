import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Contacts from "../pages/Contacts";

export const PATH = {
    HOME: '/',
    ABOUT_US: '/about_us',
    CART: '/cart',
    CONTACTS: '/contacts'
}


const RoutesPage = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<Home/>}/>
            <Route path={PATH.ABOUT_US} element={<AboutUs/>}/>
            <Route path={PATH.CONTACTS} element={<Contacts/>}/>
            <Route path={PATH.CART} element={<Cart/>}/>
        </Routes>
    );
}

export default RoutesPage;