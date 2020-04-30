import React from 'react';

const InfoDisplayer = (props) => {
    return (
        <div>
            <p>{props.spaceData.title}</p>
            <p>{props.spaceData.date}</p>
        </div>
    );
}

export default InfoDisplayer;
