import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const Move_to = useNavigate();

  const [data, setData] = useState({
    Userid: "",
    Password: "",
  });

  const ChangeValue = (e) => {
    let Userid = "Userid";
    if (e.target.id === Userid) {
      setData({ ...data, Userid: e.target.value });
      //  this.setState({color: "blue"});    
    } else {
      setData({ ...data, Password: e.target.value });
    }
  };

  const LoginData = () => {
    const { Userid, Password } = data;

    axios
      .post("http://localhost:4000/enterData/Login", {
        Userid: Userid,
        Password: Password,
      })
      .then((res) => {
        console.log("token");
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        if (res.data.token) {
          Move_to("/SignUp");
        } else {
          alert("Pls Check Your ID Or Password");
        }
      });
      
  };

  return (
    <div>
      <h1 align="center">Login Form</h1>
      <label>
        <h3 align="center" > User Id </h3>
      </label>
      <h3 align="center">
      <input
        type="Userid"
        id="Userid"
        name="Userid"
        placeholder="Enter Your Userid"
        defaultValue={data.Userid}
        onChange={(e) => ChangeValue(e)}
      />
      </h3>

      <label>
        <h3 align="center"> Password </h3>
      </label>
      <h3 align="center">
      <input
        type="Password"
        id="Password"
        name="Password"
        placeholder="Enter Your Password"
        defaultValue={data.Password}
        onChange={(e) => ChangeValue(e)}
        />
        </h3>
        <div align="center">
            <button onClick={() => LoginData()} className="btn btn-primary">Login</button>
        </div>

    </div>
  );
};

export default LoginForm;