import React from 'react';
import But from './But';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>LOGIN WITH GOOGLE</h1>
        <But provider='google' />
        <h1>LOGIN WITH KAKAO</h1>
        <But provider='kakao' />
      </div>
  );
}

export default App;
