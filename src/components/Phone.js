import React from "react";

const Phone = ({ userPhone, setUserPhone }) => {
  return (
    <div>
      <label htmlFor="phone">Phone: </label>
      <input
        id="phone"
        data-testid="phoneNumber"
        value={userPhone}
        onChange={(e) => setUserPhone(e.target.value)}
      />
    </div>
  );
};

export default Phone;
