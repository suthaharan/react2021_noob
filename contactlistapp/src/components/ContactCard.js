import React from 'react';

const ContactCard = (props) => {
    // destructure the props
    const {id, name, email} = props.contact;
    return (
        <tr>
        <td data-label="Name">{name}</td>
        <td data-label="Email">{email}</td>
        <td data-label="Action"><i className="trash alternate outline icon" style={{color: "red", marginTop:"2px"}}></i></td>
        </tr>
    );
}

export default ContactCard;

