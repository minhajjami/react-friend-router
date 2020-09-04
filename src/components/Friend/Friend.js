import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const{name,email,id}=props.friend;
    const freindStyle={
        border:'1px solid orange',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    const history = useHistory();
    const handleClick=(friendId)=>{
        const url=`/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div style={freindStyle}>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <Link to={`/friend/${id}`}> Show Detail of {id}</Link>
            <button onClick={()=>handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;