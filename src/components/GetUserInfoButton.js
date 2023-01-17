import React from 'react';

const GetUserInfoButton = (props) => {
  const getUserInfoFunc = () => {
    // if(props.at === null || props.at === undefined){
    //   console.log('user is not defined.')
    // }else{
      fetch('http://localhost:8000/auth/token/refresh/', {
        method: 'POST',
        credentials: "include"
        // headers: { 'Authorization': 'Bearer '+props.at }
      })
      .then(res => res.json())
      .then(res => console.log(res));
    // }
  };

  return (
    <>
      <button onClick={getUserInfoFunc}>Get User Information</button>
    </>
  )
};

export default GetUserInfoButton;