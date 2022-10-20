import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";

import useLocalStorage from "./useLocalStorage";
import UserContext from "./UserContext";
import "./App.css";
import RoutesList from "./RoutesList";
import NavBar from "./Navbar";
import ShareBnbApi from "./api";
import LoadingSpinner from "./common/LoadingSpinner";

export const TOKEN_STORAGE_ID = "token";

/** App Component
 *
 * Props: none
 * State: user
 *
 * Context:user
 */

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let decodedToken = decode(token);
            console.log("decodedToken", decodedToken);
            let { sub } = decode(token);
            console.log("username", sub);
            // put the token on the Api class so it can use it to call the API.
            ShareBnbApi.token = token;
            let currentUser = await ShareBnbApi.getCurrentUser(sub);
            setCurrentUser(currentUser);
            setIsLoading(false);
          } catch (err) {
            setCurrentUser({});
            setIsLoading(false);
          }
        } else {
          setCurrentUser({});
          setIsLoading(false);
        }
      }
      getCurrentUser();
    },
    [token]
  );

  /** Handles site-wide logout. */
  function logout() {
    setCurrentUser({});
    setToken(null);
  }

  /** Handles site-wide signup.
   *
   * Automatically logs them in (set token) upon signup.
   *
   * Make sure you await this function to see if any error happens.
   */

  async function signup(signupData) {
    let token = await ShareBnbApi.signup(signupData);
    setToken(token);
  }

  /** Handles site-wide login.
   *
   * Logs in a user
   *
   * Make sure you await this function to see if any error happens.
   */

  async function login(loginData) {
    let token = await ShareBnbApi.login(loginData);
    setToken(token);
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <UserContext.Provider value={{ currentUser }}>
      <div className="App">
        <BrowserRouter>
          <NavBar logout={logout} />
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
