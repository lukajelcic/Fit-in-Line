import React from 'react';

function TrainingType(props) {
    return (
            <div className="training-types">
                <div className="content">
                    <h4>{props.item.title}</h4>
                    <hr></hr>
                    <p>{props.item.text}</p>
                </div>
            </div>
    )
}

export default TrainingType;