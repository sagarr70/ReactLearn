import { APP_LOGO_URL } from "../utils/constants";
import { useState, useEffect, use } from "react";
import { Link , useLocation} from "react-router";

// Header Component
const HeaderComponent = (props) => {

  const { counterprop } = props; 

  const location = useLocation();

  const showFlag = location.pathname === "/";

  console.log("Header Component Rendered");

  const [loginButtonText, setLoginButtonText] = useState("Login");
  useEffect(() => {
    console.log("Header Component useEffect Rendered");
  }, [loginButtonText]);

  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={APP_LOGO_URL} alt="App Logo" className="app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          {showFlag &&(
          <li>
            Cart Items: {counterprop}
          </li>)}
          { !showFlag &&(
          <li>
            <Link to="/">Home</Link>
          </li>
          )}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-button"
              onClick={() => {
                loginButtonText == "Login"
                  ? setLoginButtonText("Logout")
                  : setLoginButtonText("Login");
              }}
            >
              {loginButtonText}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
