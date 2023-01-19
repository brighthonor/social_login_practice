import React from 'react';

const LogoutButton = (props) => {
  const logout = () => {
    fetch('http://localhost:8000/auth/logout/',{
      method: "POST",
      headers: {'Authorization': 'Bearer '+props.at}
    })
    .then(res => res.json())
    .then(res => console.log('logout success'));
    props.setAt("");
  }

  return (
    <>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default LogoutButton;