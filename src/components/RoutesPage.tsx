import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import AboutApp from "./AboutApp";
import Contacts from "../pages/Contacts";
import Cart from "../pages/Cart";
import SalePage from "../pages/SalePage";
import WelcomePage from "../pages/WelcomePage";
import FeedbackPage from "./FeedbackPage";
import Registration from "../pages/Registration";
import Login from "../pages/Login";


export const PATH = {
    HOME: '/',
    ABOUT_US: '/about_us',
    ABOUT_APP: '/about_app',
    CART: '/cart',
    CONTACTS: '/contacts',
    SALE: '/sale',
    WELCOME: '/pizza-shop-v.2',
    FEEDBACK: '/feedback',
    ADMIN: '/admin',
    BASKET: '/basket',
    LOGIN: '/login',
    REGISTRATION: '/registration',
}


const RoutesPage = () => {
    const isAuth = false


    return (
        <>
            {!isAuth ? <Routes>
                    <Route path={PATH.HOME} element={<Home/>}/>
                    <Route path={PATH.ABOUT_US} element={<AboutUs/>}/>
                    <Route path={PATH.ABOUT_APP} element={<AboutApp/>}/>
                    <Route path={PATH.CONTACTS} element={<Contacts/>}/>
                    <Route path={PATH.CART} element={<Cart/>}/>
                    <Route path={PATH.SALE} element={<SalePage/>}/>
                    <Route path={PATH.WELCOME} element={<WelcomePage/>}/>
                    <Route path={PATH.FEEDBACK} element={<FeedbackPage/>}/>
                    <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                </Routes>
                :
                <Routes>
                    <Route path={PATH.HOME} element={<Home/>}/>
                    <Route path={PATH.ABOUT_US} element={<AboutUs/>}/>
                    <Route path={PATH.ABOUT_APP} element={<AboutApp/>}/>
                    <Route path={PATH.CONTACTS} element={<Contacts/>}/>
                    <Route path={PATH.CART} element={<Cart/>}/>
                    <Route path={PATH.SALE} element={<SalePage/>}/>
                    <Route path={PATH.WELCOME} element={<WelcomePage/>}/>
                    <Route path={PATH.FEEDBACK} element={<FeedbackPage/>}/>
                </Routes>
            }

        </>
    );
}

export default RoutesPage;