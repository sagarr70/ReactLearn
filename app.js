const root = ReactDOM.createRoot(document.getElementById('root'));
//const heading = React.createElement('h1', { id: "heading" , xyz:"abc"} , 'Hello World!'); // props
const dv = React.createElement('div', {id:"innerdiv"}, 
    [
    React.createElement('div', {id:"innerdiv1"}, 
    [React.createElement('h1', { id: "heading1" , xyz:"abc"} , "Hello World!"),
        React.createElement('h2', { id: "heading2" , xyz:"abc"} , 'Hello World 2!')]),

    React.createElement('div', {id:"innerdiv2"}, 
    [React.createElement('h3', { id: "heading3" , xyz:"abc"} , "Hello World!"),
        React.createElement('h4', { id: "heading4" , xyz:"abc"} , 'Hello World 2!')])
    ]
    
    
    );

        
root.render(dv);