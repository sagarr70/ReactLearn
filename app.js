import React from 'react';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));
//const heading = React.createElement('h1', { id: "heading" , xyz:"abc"} , 'Hello World!'); // props
const dv = React.createElement('div', {id:"innerdiv"}, 
    [
    React.createElement('div', {id:"innerdiv1", key:"div1"}, 
    [React.createElement('h1', { id: "heading1" , key:"h1"} , "Hello World!"),
        React.createElement('h2', { id: "heading2" , key:"h2"} , 'Hello World 2!')]),

    React.createElement('div', {id:"innerdiv2" , key:"div2"}, 
    [React.createElement('h3', { id: "heading3" , key:"h3"} , "Hello World!"),
        React.createElement('h4', { id: "heading4" , key:"h4"} , 'Hello World 2!')])
    ]
    
    
    );

        
root.render(dv);