import React from 'react';
import {PATH} from "./RoutesPage";
import {NavLink} from "react-router-dom";

const ButtonAnimation = () => {


    return (
        <div className="main-content">
            <div className="item button-jittery"
             >
                <NavLink to={PATH.FEEDBACK}>
                <button
                >Click Me!</button>
                </NavLink>
            </div>
        </div>
    );
};

export default ButtonAnimation;