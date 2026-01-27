import React, { FC } from "react";

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({children, disabled = false, onClick}) => {
    return (
        <button className="btn" onClick={onClick} disabled={disabled}>{children}</button>
    )
}

export default Button
