import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;
    const friendstyle ={
        border:'3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={friendstyle}>
            <h2>I am: {name} <small>{id}</small></h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>City: {address.city}</small></p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
        </div>
    );
};

export default Friend;