import React from "react";

const Account = () => {
  return (
    <div>
      <h1>Account Page</h1>
      <div>
        <h2>User Information</h2>
        <p>Username: user123</p>
        <p>Email: user123@example.com</p>
        {/* Altri dettagli dell'utente */}
      </div>
      <div>
        <h2>Account Settings</h2>
        <p>Change Password</p>
        <p>Update Email</p>
        {/* Altre impostazioni dell'account */}
      </div>
    </div>
  );
};

export default Account;
