import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            userInfo: {
                name: "dummy",
                location: "Default",
                bio: "dummy",
                avatar_url: "dummy"
            }
        }
 
        
        console.log(this.props.name + "child constructor")
    }
    async componentDidMount(){
       console.log(this.props.name + "child did mount")
      const data = await fetch("https://api.github.com/users/rgarg6272");
      const json = await data.json();
      console.log(json);

      this.setState({
        userInfo: json,
      })
    }
    render(){
        console.log(this.props.name + "child render")
        const {name, location,bio,avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Bio: {bio}</h4>
                <img src={avatar_url} alt="img"/>
            </div>
        )
    }
}

export default UserClass;