import React, { useState } from 'react';
import GetTokenButton from './GetTokenButton';
import GetUserInfoButton from './GetUserInfoButton';
import './App.css';

function App() {
  const [at, setAt] = useState(null);
  const [rt, setRt] = useState(null);

  return (
    <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>
        <GetTokenButton provider='google' at={at} setAt={setAt} rt={rt} setRt={setRt} />
        <h1>LOGIN WITH KAKAO</h1>
        <GetTokenButton provider='kakao' at={at} setAt={setAt} rt={rt} setRt={setRt} />

        <GetUserInfoButton />
      </div>
  );
}

export default App;
