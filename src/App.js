import React, { useEffect, useState } from 'react';
import GetTokenButton from './components/GetTokenButton';
import GetUserInfoButton from './components/GetUserInfoButton';
import TokenText from './components/TokenText';
import CommonLogin from './components/CommonLogin';
import './App.css';
import { useCookies } from 'react-cookie';

function App() {
  const [at, setAt] = useState(null);
  const [rt, setRt] = useState(null);

  const [cookie] = useCookies();
  const [, , removeCookie] = useCookies(['accessToken', 'refreshToken']);

  useEffect(() => {
    if(cookie.accessToken!==undefined){
      setAt(cookie.accessToken);
      setRt(cookie.refreshToken);
      console.log(cookie.accessToken);
      // !IMPORTANT for Security
      // removeCookie('accessToken', undefined);
      // removeCookie('refreshToken', undefined);
    };
  }, [cookie, removeCookie]);

  return (
    <div className="App">
        <h1>LOGIN To MockingBird</h1>
        <CommonLogin at={at} setAt={setAt} rt={rt} setRt={setRt} />
        <h1>LOGIN WITH GOOGLE</h1>
        <GetTokenButton provider='google'  />
        <h1>LOGIN WITH KAKAO</h1>
        <GetTokenButton provider='kakao' />

        <TokenText at={at} rt={rt} />

        <GetUserInfoButton at={at} rt={rt} />
      </div>
  );
}

export default App;
