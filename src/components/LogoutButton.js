import React from 'react';
import url from '../env';

const LogoutButton = (props) => {
  const logout = () => {
    fetch(url+'/auth/logout/',{
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