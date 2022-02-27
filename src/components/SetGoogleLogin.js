import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

function SetGoogleLogin() {
  const [LoginButton, showLoginButton] = useState(true);
  const [LogoutButton, showLogoutButton] = useState(false);
  const clientId =
    "196253767196-leaq2mgdpbg6p7rcdbq6qas3q0c9ipag.apps.googleusercontent.com";
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = (res) => {
    console.log("[Login success] current_user = ", res.profileObj);
    showLoginButton(false);
    showLogoutButton(true);
  };
  const onSignoutSuccess = () => {
    alert("You are sucessfully signed out!✌🏻");
    showLoginButton(true);

    showLogoutButton(false);
  };
  //E0BE36

  return (
    <div style={{ margin: "15px 0px", display: "flex" }}>
      <h2 style={{ fontSize: "30px", color: "#92AFD7", marginLeft: "100px" }}>
        Login here!
      </h2>
      <div style={{ marginLeft: "20px" }}>
        {LoginButton ? (
          <GoogleLogin
            clientId={clientId}
            buttonText={null}
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          ></GoogleLogin>
        ) : null}
        {LogoutButton ? (
          <GoogleLogout
            clientId={clientId}
            buttonText={"GoogleLogout"}
            onLogoutSuccess={onSignoutSuccess}
          ></GoogleLogout>
        ) : null}
      </div>
    </div>
  );
}

export default SetGoogleLogin;
