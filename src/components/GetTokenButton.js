import React from 'react';
import url from '../env';

const GetTokenButton = (props) => {
  const link = url+ (props.provider === 'google' ? '/auth/rest-auth/google/redirect/' : '/auth/rest-auth/kakao/redirect/');

  const buttonName = props.provider === 'google' ? 'Google Login' : 'Kakao Login';

  return (
    <>
    <h1>LOGIN WITH {buttonName}</h1>
      <a href={link}><button>{buttonName}</button></a>
    </>
  )
};

export default GetTokenButton;