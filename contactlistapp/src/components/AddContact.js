import React from 'react';
import { useNavigate } from "react-router-dom";

export const  withNavigation = (Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
} 

class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
        id:""
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are required");
            return;
        }
        this.props.addContactHandler(this.state);
        console.log("history ", this.props.history);
        this.setState({name: "", email: ""});
        console.log(this.props);
        // return <Navigate to='/' replace={true}/>;
        //this.props.history.push("/");
        //const navigate = useNavigate(); 
        //this.props.navigate("/home", { state: { message: "Ok" } });
        //successful login 
        this.props.navigate('/');
    }  
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact List</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={ (e) => this.setState({name: e.target.value}) }/>
                        <label>Email</label>
                        <input type="email" name="name" placeholder="Email" value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) }/>
                    </div>
                    <button className="ui button blue">Add to Contact</button>
                </form>
            </div>
        );
    }
}

export default withNavigation(AddContact);