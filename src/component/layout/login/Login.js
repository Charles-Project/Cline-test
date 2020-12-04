import React, {useContext} from 'react';
import "./style.scss";
import { FcGoogle } from "react-icons/fc";

import {useGoogleLogin} from 'react-google-login';

import { Token } from '../../../utils/Token';

import { AuthContext } from "../../../context/AuthContext"

// 1070625082168-rk1rcetamuoevavgj1op0h9eii8703fn.apps.googleusercontent.com- clientid
// o2UHAbt7dD2RVUyJF_tENV7N - secret

function Login(props) {
const { setUser, setIsAuth, setSname } = useContext(AuthContext);
const clientId = `${process.env.REACT_APP_GOOGLEID}`

const onSuccess = (res) => {
    setIsAuth(true)
    setUser(res.profileObj.name);
    setSname(res.profileObj.givenName.charAt(0));

    localStorage.setItem("tokens", res.profileObj.googleId);
    localStorage.setItem("name", res.profileObj.name);

     Token(res);
     props.history.push("/dashboard");
   
  };

const onFailure = (res) => {
    setIsAuth(false)
    setUser("")
  };

const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });


    return (
        <div className="login__container">
           <div className="login__wrapper">
               <h3 className="login__wrapper--title">Clinetest</h3>
               <h6 className="login__wrapper--subtitle">Log in to continue to your Clinetest Dashboard</h6>
                <div className="login__form--wrapper">
                    <button className="login__google--btn" onClick={signIn}>
                        <span className="google__logo"><FcGoogle /></span> 
                        <span className="google__text">Sign in with Google </span>
                    </button>   

                   <div className="or">
                        <h6 className="or-title">or</h6>
                   </div>

                    <input type="email" placeholder="E-mail Address" className="form-input"/>
                    <input type="password" placeholder="Password" className="form-input"/>
                    
                    <div className="form__forget--me">
                          <input type="checkbox" id="me" name="forgetme"/>
                          <label htmlFor="me"> Remember me </label><br></br>
                    </div>

                    <button className="btn__login">Log In</button>
                    {/* <p>Forgot your password? Click to reset</p> */}
                </div>
           </div>
        </div>
    )
}

export default Login
