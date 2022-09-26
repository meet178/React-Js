import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GetData from "./getData";

const SingUp = () => {
  const Move_to = useNavigate();

  const [user, setUser] = useState({
    Userid: "",
    Fname: "",
    Lname: "",
    MoNum: "",
    country: "",
    Password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    
    const { Userid, Fname, Lname, MoNum, country, Password } = user;

    axios.post("http://localhost:4000/enterData/register", {
      Userid,
      Fname,
      Lname,
      MoNum,
      country,
      Password,
    });
  };

  const LogOut = () => {
    localStorage.removeItem("token");
    Move_to("/LoginForm");
  };

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form method="POST">
        <h3>Userid</h3>
        <input
          type="Userid"
          name="Userid"
          placeholder="Userid"
          id="Userid"
          value={user.Userid}
          onChange={handleInputs}
        />

        <h3>Fname</h3>
        <input
          type="Fname"
          name="Fname"
          placeholder="Fname"
          id="Fname"
          value={user.Fname}
          onChange={handleInputs}
        />

        <h3>Lname</h3>
        <input
          type="Lname"
          name="Lname"
          placeholder="Lname"
          id="Lname"
          value={user.Lname}
          onChange={handleInputs}
        />

        <h3>MoNum</h3>
        <input
          type="MoNum"
          name="MoNum"
          placeholder="MoNum"
          id="MoNum"
          value={user.MoNum}
          onChange={handleInputs}
        />

        <h3>country</h3>
        <input
          type="country"
          name="country"
          placeholder="country"
          id="country"
          value={user.country}
          onChange={handleInputs}
        />

        <h3>Password</h3>
        <input
          type="Password"
          name="Password"
          placeholder="Password"
          id="Password"
          value={user.Password}
          onChange={handleInputs}
        />

        <button onClick={PostData}>Submit</button>
        {/* <button onClick={DataList}>Submit In List</button> */}
      </form>
      <button onClick={() => LogOut()}>LogOut</button>
      <GetData />
    </div>
  );
};

export default SingUp;
