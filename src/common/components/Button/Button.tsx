import React from 'react';
import {ButtonProps} from "common/types/button/ButtonProps.ts";

export const Button: React.FC<ButtonProps> = ({className, children, onClick}) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};