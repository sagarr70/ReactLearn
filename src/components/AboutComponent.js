import {useState , useEffect} from 'react';
import UserClassComponent from './UserClassComponent.js';

const AboutComponent =() => {

    useEffect(() => {
        const intervalId = setInterval( () => {
            console.log("Hello from About Component");
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    console.log(useState());
    return (
        <>       
        <div className="about-page">
            <h1>About Us</h1>
            <p>This is the about page of our application.</p>

            <UserClassComponent name={"Sagar Aggarwal"} location={"New Delhi"}/>
        </div>
      </>

    );
}

export default AboutComponent;