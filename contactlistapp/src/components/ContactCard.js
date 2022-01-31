import React from 'react';
import usericon from '../images/panda.png';
import {Link} from 'react-router-dom';

const ContactCard = (props) => {
    // destructure the props
    const {id, name, email} = props.contact;
    console.log("Inside contact card", props.contact);
    return (
        <tr>
        <td data-label="Name"><img className="ui avatar image" src={usericon} alt="user" /><Link to={`/contact/${id}`} state={{contact: props.contact}}>{name}</Link></td>
        <td data-label="Email"><Link to={`/contact/${id}`} state={{contact: props.contact}}>{email}</Link></td>
        <td data-label="Action">
            <i className="trash alternate outline icon" style={{color: "red", marginTop:"2px"}} onClick={() => props.clickHandler(id)} ></i></td>
        </tr>
    );
}

export default ContactCard;

