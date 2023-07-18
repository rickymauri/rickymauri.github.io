import React from "react";

const Button = (props) => {
    
    return(
        <button className="btn-start"
                type={props.type || 'button'} 
                onClick={props.onClick}><span>
                {props.children}</span>
        </button>
    );
};

export default Button;