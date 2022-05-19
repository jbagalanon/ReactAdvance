import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('SPL');

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';




  return (<>
    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}

    <h1>{text || 'Swordfish'}</h1>
    <h2>{text && 'Bhugz'}</h2>
  </>);
};

export default ShortCircuit;
