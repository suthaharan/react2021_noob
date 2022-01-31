import React from 'react';
//import { useNavigate } from 'react-router-dom';

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
        console.log(this.state);
        this.setState({name: "", email: ""});
        console.log(this.props);
        //this.props.history.push("/");
        //const navigate = useNavigate(); 
        //navigate("/home", { state: { message: "Ok" } });
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

export default AddContact;