import React from 'react';
import {SearchInputProps} from "common/types/searchInput/SearchInputProps.ts";

export const SearchInput: React.FC<SearchInputProps> = ({className, value, onChange, placeholder, children}) => {
    return (
        <>
            <input type="text" className={className} value={value} onChange={onChange} placeholder={placeholder}/>
            {children}
        </>
    );
};