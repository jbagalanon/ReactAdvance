import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log('hi');
    window.addEventListener("resize", checkSize);

    //this is important in conditional(appear/dissappear) rendering otherwise use []
    // return () => {
    //   console.log('cleanup');
    //   window.removeEventListener('resize', checkSize);
    // };
  }, []);

  return <>
    <h1>Windows Width</h1>
    <h2>{size} PX</h2>
  </>;
};

export default UseEffectCleanup;
