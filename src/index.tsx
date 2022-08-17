import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";



const stripPromise = loadStripe('pk_test_51LXsh5IugZRUmYNQj6Rp8s2ItpOwUUaGbE5q0TyHzkRfv3FTEHBscrPYgxmyv8swhgeGgWYWEHhefDKDoI5QiqdM00qiSPBiGE');
// const options = {
//     clientSecret: '{{CLIENT_SECRET}}',
// }


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Elements
                stripe={stripPromise}
                // options={options}
            >
            <App/>
            </Elements>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);


reportWebVitals();
