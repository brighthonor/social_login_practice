import React, { useState } from 'react';

const CommonLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fetch('http://localhost:8000/auth/login/', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(res => {
      props.setAt(res.access_token);
      props.setRt(res.refresh_token);
    })
  }

  return (
    <>
      email: <input value={email} onChange={val=>setEmail(val.target.value)}></input> <br />
      password: <input value={password} onChange={val=>setPassword(val.target.value)}></input> <br />
      <button onClick={login}>Common Login</button>
    </>
  );
};

export default CommonLogin;