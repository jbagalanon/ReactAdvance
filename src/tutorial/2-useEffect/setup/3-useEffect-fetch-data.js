import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {

    const response = await fetch(url);
    const users = await response.json();
    setUsers(users)
    console.log(users);
    // = this code will run but it loops because of useeffect functions. Solution is add dependency array in useEffect function.
  }

  //useeffect will run after every render and it cause looping for some codes
  useEffect(() => {
    getUsers();
  }, []);


  return <>
    <h3>Github Users</h3>
    <ul className="users">
    {users.map((user) =>{
      const {id, login, avatar_url, html_url} = user;

      return (
      <li key={id}>
        <img src={avatar_url} alt={login} />
        <div>
          <h4>{login}</h4>
          <a href={html_url}></a> 
        </div>
      </li>
      );
    })}
    </ul>


  </>;
};

export default UseEffectSecondArgument;
