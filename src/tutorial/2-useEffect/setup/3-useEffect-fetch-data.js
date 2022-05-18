import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {

    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    //setUsers (users) = this code will run but it loops because of useeffect functions
  }

  //useeffect will run after every render and it cause looping for some codes
  useEffect(() => {
    getUsers();
  })

  return <>
    <h3>Github Users</h3>


  </>;
};

export default UseEffectSecondArgument;
