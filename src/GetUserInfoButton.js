import React from 'react';
import { useCookies } from 'react-cookie';

const GetUserInfoButton = () => {
  const [cookie] = useCookies();
  
  const getUserInfoFunc = () => {
    if(cookie.accessToken === undefined){
      console.log('user is not defined.')
    }
  };

  return (
    <>
      <button onClick={getUserInfoFunc}>Get User Information</button>
    </>
  )
};

export default GetUserInfoButton;