import React from 'react';
import url from '../env';

const GetUserInfoButton = (props) => {
  const getUserInfoFunc = () => {
    if(props.at === null || props.at === undefined || props.at === ''){
      console.log('user is not defined.')
    }else{
      fetch(url+'/auth/user/profile/', {
        method: 'GET',
        headers: {'Authorization': 'Bearer '+props.at}
      })
      .then(res => res.json())
      .then(res => console.log(res));
    }
  };

  return (
    <>
      <button onClick={getUserInfoFunc}>Get User Information</button>
    </>
  )
};

export default GetUserInfoButton;