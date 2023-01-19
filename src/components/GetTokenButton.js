import React from 'react';

const GetTokenButton = (props) => {
  const link = props.provider === 'google' ? 'http://localhost:8000/auth/rest-auth/google/redirect/' : 'http://localhost:8000/auth/rest-auth/kakao/redirect/';

  const buttonName = props.provider === 'google' ? 'Google Login' : 'Kakao Login';

  return (
    <>
    <h1>LOGIN WITH {buttonName}</h1>
      <a href={link}><button>{buttonName}</button></a>
    </>
  )
};

export default GetTokenButton;