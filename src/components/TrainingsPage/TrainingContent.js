import React from 'react';

function TrainingContent(props) {
    return (
        <div className="page-content">
            <div className="trn-text">
                <h1 className="trn-title">{props.h1}</h1>
                <h2>{props.h2} </h2>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
            </div>
        </div>
    )
}

export default TrainingContent