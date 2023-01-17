import React, { useEffect, useState } from 'react';

const TokenText = (props) => {
  const [at, setAt] = useState("");
  const [rt, setRt] = useState("");

  useEffect(() => {
    setAt(props.at);
    setRt(props.rt);
  }, [props]);

  return (
    <>
      <p>access_token: {at}</p>
      <p>refresh_token: {rt}</p>
    </>
  );
};

export default TokenText;