import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const UserAuth = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({ name: "Sunny Kewat", email: "sunnykewat31@gmail.com" });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <h2>User Name is: {user.name}</h2>
      <h2>User email is: {user.email}</h2>
    </div>
  );
};

export default UserAuth;
