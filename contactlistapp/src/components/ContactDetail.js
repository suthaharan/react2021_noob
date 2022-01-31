import React from 'react';
import usericon from '../images/penguin.png';
import { useLocation, Link } from 'react-router-dom';

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
            <div className='center-div centered'>
                <Link to="/"><button className='ui button blue center'>Back to Contact List</button></Link>
            </div>
        </div>
    );
}

export default ContactDetail;

