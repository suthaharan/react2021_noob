import React from 'react';
import usericon from '../images/panda.png';
import { useLocation } from 'react-router-dom';

const ContactDetail= (props) => {
    //console.log(props);
    // destructure the props
    const location = useLocation()
    const { contact } = location.state
    // console.log("in contact detail >> location state ", location.state);
    const {id, name, email} = contact;
    return (
        <div className="main">
            <div className='ui card centered'>
                <div className='image'>
                    <img src={usericon} alt="user" />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className=''>{email}</div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail;

