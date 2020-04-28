import React from 'react';

const ImageDisplayer = (props) => {
    return (
        <div>
            <p>{props.spaceData.title}</p>
            <img src={props.spaceData.hdurl}/>
            <p>{props.spaceData.date}</p>
        </div>
    )
}

export default ImageDisplayer;
