import React, {FC} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import CarouselPage from "./components/CarouselPage";
import RoutesPage from "./components/RoutesPage";

const App: FC = () => {

    return (

        <div className="wrapper_app">
            <Header/>
            <CarouselPage/>
            <div className="content">
                <RoutesPage/>

            </div>
        </div>


    );
}

export default App;
