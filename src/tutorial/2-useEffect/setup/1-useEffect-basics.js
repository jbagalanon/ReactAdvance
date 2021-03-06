import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('useeffect activated');
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, []); //[]=if empty, it will run only on initial render
  // [value] = the useeffect will run everytime the value 

  console.log('render component');
  return <>
    <h1>{value} </h1>
    <button className="btn" onClick={() => setValue(value + 1)}>Click Here</button>

  </>;
};

export default UseEffectBasics;
