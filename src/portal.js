import React from "react";
import './portal.css'

const Portal = ( {isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return(
         <div
            className="portalClose"
            onClick={onClose}
        >
            <div
            className="Portal"
            >
                {children}
            </div>
        </div>
    )
}

export default Portal;