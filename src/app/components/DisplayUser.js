"use client";
import React from 'react';
import "../style.css";
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

export const DisplayUser = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);

  // console.log(user);

  return (
    <div className='display-user'>
        <h1>Display User</h1>
        <ul>
        {user.length > 0 ? (
          user.map((val) => {
            // console.log("val", val.id);
            return <>
             <li className='user-item' key={val.id}>
             {val.name}
             <button onClick={() => dispatch(removeUser(val.id))}>Remove User</button>
             </li>
            </>
          })
        ): (
          "User List is Empty"
        )}         
        </ul>
    </div>
  )
}

