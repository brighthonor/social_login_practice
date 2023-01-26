import React, { useState } from 'react';
import url from '../env';

const CommonLogin = (props) => {
  const [email, setEmail] = useState("brighthonor@snu.ac.kr");
  const [password, setPassword] = useState("cjdeka0211!");

  const redirectUrl = (code, callback) => {
    return url+'/auth/login/redirect/?code='+code+'&callback_url='+callback;
  };

  const login = () => {
    fetch(url+'/auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      window.location.href=redirectUrl(res.code, 'https://localhost.suplix.shop:3000')
    });
  }

  return (
    <>
    <h1>LOGIN To MockingBird</h1>
      email: <input value={email} onChange={val=>setEmail(val.target.value)}></input> <br />
      password: <input value={password} onChange={val=>setPassword(val.target.value)}></input> <br />
      <button onClick={login}>Common Login</button>
    </>
  );
};

export default CommonLogin;