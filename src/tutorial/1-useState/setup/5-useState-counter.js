import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);


  return <>
    <section style={{ margin: '4rem 0' }}></section>
    <h2>regular counter</h2>
    <h1>{ value}</h1>
  </>
};

export default UseStateCounter;
