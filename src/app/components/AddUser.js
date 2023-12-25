"use client";

import React, { useState } from 'react'
import { addUser } from '@/app/redux/slice';
import { useDispatch } from 'react-redux';
import "../style.css";
import Link from 'next/link';

export const AddUser = () => {
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const userDispatch = () => {
        dispatch(addUser(name));
      // console.log(name)
      // setName('');
    }

  

  return (
    <div className='add-user'>
        <h1>Add User</h1>
        <input type='text' placeholder='Add New User'
        className='input-field' 
        onChange={(e) => setName(e.target.value)}
        />

        <button className='btn' onClick={userDispatch}>Add User</button>
        <div>
          <Link href="/apiusers">Go to API USER PAGE</Link>
        </div>
    </div>
  )
}
