import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';




  return (<>
    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}

    <h1>{text || 'Swordfish'}</h1>
    <button className="btn">Toggle Error</button>
    <h2>{text && 'Bhugz'}</h2>
    <h2>{!text && "Hi lang"}</h2>
  </>);
};

export default ShortCircuit;
