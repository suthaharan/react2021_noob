import React from "react";
// Create a functional component
const ContactList = (props) => {
    console.log(props);
    const renderContactList = props.contacts.map((contact) => {
        return (
            <tr>
            <td data-label="Name">{contact.name}</td>
            <td data-label="Email">{contact.email}</td>
            <td data-label="Action"><i className="trash alternate outline icon"></i></td>
          </tr>
        );
    });
    return (
        <div className="ui celled list">
                <h2>Contact List</h2>
                <table className="ui celled table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderContactList}</tbody>
                </table>
                
        </div>
    );
}

export default ContactList;