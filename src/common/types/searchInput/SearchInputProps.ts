import React, {ChangeEvent} from "react";

export type SearchInputProps = {
    value: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
    className?: string;
    children?: React.ReactNode;
}