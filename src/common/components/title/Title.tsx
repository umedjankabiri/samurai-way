import React from 'react';
import {TitleProps} from "common/types/title/TitleProps.ts";

export const Title: React.FC<TitleProps> = ({className, children}) => {
    return (
        <h1 className={className}>
            {children}
        </h1>
    );
};