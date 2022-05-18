import React, { useState } from 'react';



const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Swordfish', age: 27, message: "Welcome to gulag" });
  console.log(person);

  return <>
  <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
  </>;
};

export default UseStateObject;
