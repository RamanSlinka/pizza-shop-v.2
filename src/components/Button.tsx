import React, {FC} from 'react';
import classNames from "classnames";

type ButtonPropsType = {
    className: any
    outline:string
    children: React.ComponentType
    onClick: () => void
}


const Button: FC <any>= ({className, outline, children, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={classNames('button', className,{
                'button--outline' : outline,
            })}>
                {children}
            </button>
        </div>
    );
};

export default Button;