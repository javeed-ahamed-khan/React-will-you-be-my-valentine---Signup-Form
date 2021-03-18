import React from "react";

const Password = ({ userPassword, setUserPassword }) => {
  return (
    <div>
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        type="password"
        data-testid="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
    </div>
  );
};

export default Password;
