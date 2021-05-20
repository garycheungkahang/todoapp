import React, { useRef, useState, useEffect } from "react";
// import { response } from "../../../express/app";
import auth from "./auth";

// import {useRef} from ''
export const LandingPage = props => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const loginStatus = useRef(false)
  const nameRef = useRef()
  const passWordRef = useRef();

  const handleSubmit = (e) => {
    // e.preventDefault();
    const data = { name: nameRef.current.value, password: passWordRef.current.value };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:9000/users/', requestOptions)
      .then(response => response.json())
  };
  useEffect(() => {
    // console.log(loginStatus)
  })

  const handleSubmitlogin = (e) => {
    // e.preventDefault();
    const data = { name: nameRef.current.value, password: passWordRef.current.value };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
    fetch('http://localhost:9000/users/login', requestOptions)
      .then(res => {
        const results = res.ok;
        loginStatus.current = results
      });

  };

  const onClickHandling = async (e) => {
    await handleSubmit(e);
    await new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
    await handleSubmitlogin(e);

    setTimeout(async () => {
      if (!loginStatus.current) return
      await auth.login(() => {
        props.history.push("/todo");
      });
    }, 100);
    // }
  }

  return (
    <>
      <div style={{ display: 'flex', margin: 'auto', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '600px', width: '60%', background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)' }}>
        <h1>Landing Page</h1>
        <div>
        <h2>Name:</h2>
        <input ref={nameRef} type="text" id="lname" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
        <h2>Password:</h2>
        <input ref={passWordRef} type="password" id="lname" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button
          onClick={() => {
            onClickHandling()
          }}
        >
          Login
      </button>
        {loginStatus.current}
      </div>
    </>
  );
};