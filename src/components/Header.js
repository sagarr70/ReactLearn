import { APP_LOGO_URL } from "../utils/constants";
import { useState } from "react";

// Header Component
const HeaderComponent = () => {

  const [loginButtonText, setLoginButtonText] = useState("Login");

  return (
    <header className="app-header">
      <div className="logo-container">
        <img
          src={APP_LOGO_URL}
          alt="App Logo"
          className="app-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li> 
            <button className="login-button" onClick={ () => {loginButtonText == "Login" ? setLoginButtonText("Logout") : setLoginButtonText("Login")}  }>{loginButtonText}</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
