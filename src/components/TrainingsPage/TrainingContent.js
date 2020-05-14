import React from 'react';

function TrainingContent(props) {
    return (
        <div className="page-content">
            <div className="trn-text">
                <h1 className="trn-title" style={{fontWeight:'500'}}>{props.h1}</h1>
                <h2>{props.h2}</h2>
                <h5 style={{fontSize:'18px',color:'rgb(90, 90, 90)',width:'90%',lineHeight:'1.7rem'}}>{props.text1}</h5>
                <hr style={{width:'100%'}}></hr>
                <br />
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