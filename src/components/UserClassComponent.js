import React from "react";

class UserClassComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
        
    }

    render(){

        const {name,location }= this.props;
        const{count}= this.state;



        return (
            <>
            <h1>{name} is located in {location}. Count: {count}</h1>
            <button onClick={() => this.setState({ count: count + 1 })}>Increment</button>
            </>
        );
    }
}

export default UserClassComponent;