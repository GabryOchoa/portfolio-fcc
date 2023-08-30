import React from "react";
import { UserProvider, useUser } from "./originContext";

const User = () => {
  const { user } = useUser();
  return (
    <div>
      <p>
        Hellos <span className="Username"> {user.name} </span>
      </p>
    </div>
  );
};

const Show = () => {
  return (
    <header>
      <h2>Use Hook Context</h2>
      <User />
    </header>
  );
};
const Context = () => {
  return (
    <UserProvider>
      <Show />
    </UserProvider>
  );
};

export default Context;
