import React, { useState } from 'react';



const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Swordfish', age: 27, message: "Welcome to gulag" });

  const changeMessage = () => {
    // setPerson({ ...person, name: "Barracuda", message: "See you again" });

    setMessage ('Just hi');
    setAge(31);
  }
  // Alternative way, not declaring an onject
  const [name, setName] = useState('Barracuda');
  const [age, setAge] = useState(23);
  const [message, setMessage] = useState("til death do us die");


  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>Change Message</button>
  </>;
};

export default UseStateObject;
