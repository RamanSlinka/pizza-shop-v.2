import React, {FC} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route, Routes} from "react-router-dom";
import CarouselPage from "./components/CarouselPage";

const App: FC = () => {

    return (

        <div className="wrapper">
            <Header/>
            <CarouselPage/>
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
