import React from 'react';

function RegButton(props) {
    return (
        <div>
            <a className="reg-btn" href="/">{props.name}</a>
        </div>
    )
}

export default RegButton;