import React, { useState, useEffect } from 'react';


const url = 'https://api.github.com/users/QuincyLarson';


//this is tutorial 20

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
    .then((resp)=>resp.json())
    .then((user)=>console.log(user))
    .catch((error)=> console.log (error));

  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>

  }

  if (isError) {
    return (
      <h2>Error</h2>
    );
  }


  return <h1>{user} returns</h1>;
};

export default MultipleReturns;
