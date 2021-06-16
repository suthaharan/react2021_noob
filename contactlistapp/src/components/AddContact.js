import React from 'react';

class AddContact extends React.Component{
    render(){
        return (
            <div className="ui main">
                <h2>Add Contact List</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                        <label>Email</label>
                        <input type="email" name="name" placeholder="Email" />
                    </div>
                    <button className="ui button blue">Add to Contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;