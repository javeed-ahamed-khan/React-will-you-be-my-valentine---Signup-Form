import React from "react";

const Name = ({ userName, setUserName }) => {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        data-testid="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};

export default Name;
