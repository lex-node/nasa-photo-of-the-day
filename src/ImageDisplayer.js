import React from 'react';

const ImageDisplayer = (props) => {
    return (
        <div>
            <img src={props.spaceData.hdurl} alt={`${props.spaceData.title}`}/>
        </div>
    )
}

export default ImageDisplayer;
