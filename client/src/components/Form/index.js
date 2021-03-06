import React from "react";
import style from "./style.css"

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} className="btn btn-success form-btn">
            {props.children}
        </button>
    )
}