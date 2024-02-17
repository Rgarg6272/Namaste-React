import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props);

       console.log("parent constructor")

    }
    componentDidMount() {
       console.log("parent did mount")
    }

    componentDidUpdate(){
        console.log("parent did update")
    }

    componentWillUnmount(){
        console.log("parent will unmount")
    }
    render(){
        console.log("parent render");
        return (
            <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name={"raj garg"} location="noida"/>
        </div>
        )
    }
}


export default About;