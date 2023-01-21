import React, { useEffect, useState } from 'react';
import GetTokenButton from './components/GetTokenButton';
import GetUserInfoButton from './components/GetUserInfoButton';
import TokenText from './components/TokenText';
import CommonLogin from './components/CommonLogin';
import './App.css';
import LogoutButton from './components/LogoutButton';
import url from './env';

function App() {
  const [at, setAt] = useState(null);

  const refresh = () => {
    fetch(url+'/auth/token/refresh/', {
      /*******************************************
       * credential은 'include'와 'same-site'가 있는데,
       * 보안상 'same-site'를 써야함.
       * 그런데 지금은 localhost:3000 과 localhost:8000에서 작업중이므로
       * 어쩔 수 없이 'include'를 사용중
       * 이 값을 secret으로 빼서 deploy할때만 값을 바꿔주는 것도
       * 하나의 방법 (실제로 backend에서는 이 방법을 사용할 예정)
       ******************************************/
      method: 'POST',
      credentials: 'include'
    })
    .then(res => {
      if(res.status===200){
        return res.json();
      }
      else return null;
    })
    .then(res => {
      if(res!==null){
        setAt(res.access);
      }
    });
  }

  useEffect(() => {
    refresh();
    const interval = setInterval(() => {
      refresh();
    }, 4000*60); // 이건 일단은 4분인데, 백엔드와 원만한 합의 후 수정 가능
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="App">
        <CommonLogin at={at} setAt={setAt} />
        <GetTokenButton provider='google'  />
        <GetTokenButton provider='kakao' />
        <TokenText at={at} />
        <GetUserInfoButton at={at} />
        <LogoutButton at={at} setAt={setAt} />
      </div>
  );
}

export default App;
