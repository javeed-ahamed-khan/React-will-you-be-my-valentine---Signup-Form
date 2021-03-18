import React from "react";

const Email = ({ userEmail, setUserEmail }) => {
  return (
    <div>
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        data-testid="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
    </div>
  );
};

export default Email;
