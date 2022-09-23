import React, { useState } from "react";
// import { FcApproval } from "react-icons/fc";

const Users = ({ users }) => {
  const email = "meetlathiya407@gmail.com";
  const Password = "meetLathiya@159";

  const [Data, setData] = useState(email, Password);

  const GetData = () => {
    setData(Data);
  };

  return (
    <>
      <h1 className="h1">
        {" "}
        <b>All Data</b>{" "}
      </h1>
      <div className="container-fluid mt-5"></div>
      <div className="row text-center">
        <label>Email</label>
        <input name="email" placeholder="E-mail" id="email" />

        <label>Password</label>
        <input name="Password" placeholder="Password" id="Password" />

        <button onClick={GetData}>Submit</button>
      </div>
    </>
  );
};

export default Users;
