import React, { useState } from 'react';
import { COROUSEL_IMAGES } from '../utils/constants';



const CorousalComponent = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <>
        <div className='crousel'>
        <button className='crousel-button' onClick={() => setCurrentImageIndex((currentImageIndex - 1 ) % COROUSEL_IMAGES.length)}>Previous</button>
        {COROUSEL_IMAGES.map( (img, index) => 
        <img key={index} src={img} alt="image" style={{ display: index === currentImageIndex ? 'block' : 'none' }}></img>
        )}
        <button className='crousel-button' onClick={() => setCurrentImageIndex((currentImageIndex + 1) % COROUSEL_IMAGES.length)}>Next</button>
        </div>
        </>
    );
}

export default CorousalComponent;