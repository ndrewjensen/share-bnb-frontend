import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import decode from "jwt-decode";
import useLocalStorage from "./useLocalStorage";
import UserContext from "./UserContext";

import './App.css';
import RoutesList from './RoutesList';
import Navbar from "./Navbar";
import ShareBnbApi from "./api";

export const TOKEN_STORAGE_ID = "token";

/** App Component
 *
 * Props:
 * -none
 *
 * State:
 * -user
 *
 * Context:
 *
 * -user
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
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = decode(token);
            // put the token on the Api class so it can use it to call the API.
            ShareBnbApi.token = token;
            // let currentUser = await ShareBnbApi.getCurrentUser(username);

            setCurrentUser({username});
            setIsLoading(false);
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
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

  if (isLoading) return <h1>Loading</h1>;

  return (
    <UserContext.Provider value={{ currentUser }}>
      <div className="App">
        <BrowserRouter>
          <Navbar logout={logout}/>
          <RoutesList login={login} signup={signup} />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
