import React from 'react';

const ButtonAnimation = () => {
    return (
        <div className="main-content">
            <div className="item button-jittery"
             >
                <button
                onClick={() => {alert("hi! content will be here")}}
                >Click Me!</button>

            </div>
        </div>
    );
};

export default ButtonAnimation;