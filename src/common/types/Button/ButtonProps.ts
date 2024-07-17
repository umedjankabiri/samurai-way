import React from "react";

export type ButtonProps = {
    onClick?: () => void
    className?: string
    children: React.ReactNode
}