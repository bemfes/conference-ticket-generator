import React, { FC } from "react"

interface modalProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const Modal: FC<modalProps> = ({onClick, children}) => {
    return (
        <div className="modal">
            <div className="modal-box">
                <button className="modal-btn" onClick={onClick}>&#x2715;</button>
                <div className="modal-content">
                    <p className="modal-text">{children}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal
