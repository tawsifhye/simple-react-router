import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id, name, phone, website, address} = props.friend;
    const history = useHistory();
    const friendstyle ={
        border:'3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }

    const handleFriendClick = () =>{
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendstyle}>
            <h2>I am: {name} <small>{id}</small></h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>City: {address.city}</small></p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me</button>
        </div>
    );
};

export default Friend;