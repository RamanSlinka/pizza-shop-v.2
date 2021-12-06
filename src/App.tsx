import React, {FC} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import CarouselPage from "./components/CarouselPage";
import RoutesPage from "./components/RoutesPage";
import Footer from "./components/Footer";
import WelcomePage from "./pages/WelcomePage";

const App: FC = () => {

    return (

        <div className="wrapper_app">
            <Header/>
            <WelcomePage/>
            <CarouselPage/>
            <div className="content">
                <RoutesPage/>
            </div>
            <Footer/>
        </div>


    );
}

export default App;
