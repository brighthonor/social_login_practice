import { useEffect } from "react";
import { useCookies } from "react-cookie";

const GetTokenButton = (props) => {
  const link = props.provider === 'google' ? 'http://localhost:8000/auth/rest-auth/google/redirect/' : 'http://localhost:8000/auth/rest-auth/kakao/redirect/';

  const buttonName = props.provider === 'google' ? 'Google Login' : 'Kakao Login';

  const [cookie] = useCookies();

  useEffect(() => {
    if(cookie.accessToken !== undefined){
      props.setAt(cookie.accessToken);
      props.setRt(cookie.refreshToken);
    }
  }, [cookie, props]);

  return (
    <>
      <a href={link}><button>{buttonName}</button></a>
      <p>access_token: {props.at}</p>
      <p>refresh_token: {props.rt}</p>
    </>
  )
};

export default GetTokenButton;