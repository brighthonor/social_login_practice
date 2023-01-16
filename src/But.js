import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const But = (props) => {
  const link = props.provider === 'google' ? 'http://localhost:8000/auth/rest-auth/google/redirect/' : 'http://localhost:8000/auth/rest-auth/kakao/redirect/';

  const buttonName = props.provider === 'google' ? 'Google Login' : 'Kakao Login';

  const [cookie] = useCookies();

  const [at, setAt] = useState(null);
  const [rt, setRt] = useState(null);

  useEffect(() => {
    if(cookie.accessToken !== undefined){
      setAt(cookie.accessToken);
      setRt(cookie.refreshToken);
    }
  }, [cookie]);

  const func = () => {
    fetch('http://localhost:8000/auth/test/', {
      'headers': {'Authorization': 'Bearer '+cookie.accessToken}
    }).then(res => res.json())
    .then(res => console.log(res));
  };

  return (
    <>
      <a href={link}><button>{buttonName}</button></a>
      <p>access_token: {at}</p>
      <p>refresh_token: {rt}</p>
      <button onClick={func}>test</button>
    </>
  )
};

export default But;