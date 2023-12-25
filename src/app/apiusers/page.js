"use client";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiUser } from '../redux/slice';

const Page = () => {
    const [toggleValue, setToggleValue] = useState(false);

    const dispatch = useDispatch();
    const users = useSelector(state => state.userApiData);

    const fetchUser = () => {
        dispatch(fetchApiUser());
        setToggleValue(!toggleValue);
    }

  return (
    <div>
        <h1>USER LIST FROM API</h1>
        <button onClick={fetchUser}>Load Users</button>
        <ul>
        {toggleValue && users.length > 0 ? (
            users.map((user) => {
                return <li key={user.id}>
                    <h4>Name: {user.name}</h4>
                    <h4>UserName: {user.username}</h4>
                    <h4>Email: {user.email}</h4>
                </li>
            })
        ): (
            "User List is Empty"
        )}
        </ul>
    </div>
  )
}

export default Page