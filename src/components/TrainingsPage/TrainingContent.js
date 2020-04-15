import React from 'react';

function TrainingContent(props) {
    return (
        <div className="page-content">
            <div className="trn-text">
                <h1 className="trn-title">{props.h1}</h1>
                <h2>{props.h2} </h2>
                <p>{props.text1}</p>
                <h4>{props.sub1}</h4>
                <p>{props.c1}</p>
                <h4>{props.sub2}</h4>
                <p>{props.c2}</p>
                <h4>{props.sub3}</h4>
                <p>{props.c3}</p>
                <h4>{props.sub4}</h4>
                <p>{props.c4}</p>
                <h4>{props.sub5}</h4>
                <p>{props.c5}</p>
                <h4>{props.sub6}</h4>
                <p>{props.c6}</p>
                <h4>{props.sub7}</h4>
                <p>{props.c7}</p>
            </div>
        </div>
    )
}

export default TrainingContent