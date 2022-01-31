import React from "react";
import ContactCard from "./ContactCard";
import {Link} from 'react-router-dom';
// Create a functional component
const ContactList = (props) => {
    console.log(props);
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={(id) => props.getContactId(id)} key={contact.id}></ContactCard>
        );
    });
    return (
        <div className="ui celled list">
                <h2>Contact List <Link to="/add"><button className="ui button blue right">Add Contact</button></Link></h2>
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