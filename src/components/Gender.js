import React from "react";

const Gender = ({ userGender, setUserGender }) => {
  return (
    <div>
      <label htmlFor="gender">Gender: </label>
      <select
        id="gender"
        data-testid="gender"
        value={userGender}
        onChange={(e) => setUserGender(e.target.value)}
      >
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="other">other</option>
      </select>
    </div>
  );
};

export default Gender;
