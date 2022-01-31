import React from 'react';
import usericon from '../images/panda.png';

const ContactCard = (props) => {
    // destructure the props
    const {id, name, email} = props.contact;
    return (
        <tr>
        <td data-label="Name"><img className="ui avatar image" src={usericon} alt="user" />{name}</td>
        <td data-label="Email">{email}</td>
        <td data-label="Action">
            <i className="trash alternate outline icon" style={{color: "red", marginTop:"2px"}} onClick={() => props.clickHandler(id)} ></i></td>
        </tr>
    );
}

export default ContactCard;

