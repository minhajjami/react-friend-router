import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h1>Details of {friendId}</h1>
            <p>Name : {friend.name}</p>
            <p>Email : {friend.email}</p>
            <p>Phone : {friend.phone}</p>
            <p>Website : {friend.website}</p>
        </div>
    );
};

export default FriendDetail;