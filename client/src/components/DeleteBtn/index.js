import React from "react";
import Style from "./style.css";

function DeleteBtn(props) {
    return (
        <span className="delete-btn" {...props} role="button" tabIndex="0">
            <i class="fas fa-minus-circle"></i>
        </span>
    )
}

export default DeleteBtn;