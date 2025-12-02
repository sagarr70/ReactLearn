import React, { useState } from 'react';

const images = ["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/c0adbf21-5fba-47ec-94d4-4300f7ff7ed0_53770.JPG",
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/50826a85-d04f-48e2-a1fa-8e353fb8ad6d_24184.JPG",
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/1/1f4794c4-eb55-401b-b2b5-0a26c69ee1a5_376932.jpg"];



const CorousalComponent = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <>
        <div className='crousel'>
        <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}>Previous</button>
        {images.map( (img, index) => 
        <img key={index} src={img} alt="image" style={{ display: index === currentImageIndex ? 'block' : 'none' }}></img>
        )}
        <button onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}>Next</button>
        </div>
        </>
    );
}

export default CorousalComponent;