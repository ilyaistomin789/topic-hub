import React from "react";

const ModalCloseButton = ( {closeCallback} ) => {
    return(
        <button
            type="button"
            onClick={() => {
                closeCallback();
            }}>
            <i className="fas fa-times"></i>
        </button>
    )
}

export default ModalCloseButton;
