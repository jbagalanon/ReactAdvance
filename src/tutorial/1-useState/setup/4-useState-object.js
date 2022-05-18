import React, { useState } from 'react';



const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Swordfish', age: 27, message: "Welcome to gulag" });

  const changeMessage = () => {
    setPerson({...person, name:"Barracuda", message: "See you again"});
  }

  return <>
  <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={changeMessage}>Change Message</button>
  </>;
};

export default UseStateObject;
