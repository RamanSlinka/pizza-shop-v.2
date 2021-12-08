import React, {FC} from 'react';
import './scss/app.scss';
import Header from "./components/Header";
import RoutesPage from "./components/RoutesPage";
import Footer from "./components/Footer";

const App: FC = () => {

    return (

        <div className="wrapper_app">
            <Header/>
            <div className="content">
                <RoutesPage/>
            </div>
            <Footer/>
        </div>


    );
}

export default App;
