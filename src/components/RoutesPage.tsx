import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Contacts from "../pages/Contacts";
import SalePage from "../pages/SalePage";

export const PATH = {
    HOME: '/',
    ABOUT_US: '/about_us',
    CART: '/cart',
    CONTACTS: '/contacts',
    SALE: '/sale'
}


const RoutesPage = () => {
    return (
        <Routes>
            <Route path={PATH.HOME} element={<Home/>}/>
            <Route path={PATH.ABOUT_US} element={<AboutUs/>}/>
            <Route path={PATH.CONTACTS} element={<Contacts/>}/>
            <Route path={PATH.CART} element={<Cart/>}/>
            <Route path={PATH.SALE} element={<SalePage/>}/>
        </Routes>
    );
}

export default RoutesPage;