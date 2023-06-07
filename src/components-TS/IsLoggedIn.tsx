import { useState } from "react";

const IsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h3>User is {isLoggedIn ? "logged in" : "logged out"}</h3>
    </div>
  );
};

export default IsLoggedIn;
