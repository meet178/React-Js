import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateForm = ({ single, Function }) => {
  const [Userid, setUserid] = useState();
  const [Fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [MoNum, setMoNum] = useState();
  const [country, setCountry] = useState();
  const [Password, setPassword] = useState();

  useEffect(() => {
    let user = localStorage.getItem("token");
    axios
      .get(`http://localhost:4000/enterData/getdataById?id=` + single, {
        headers: {
          token: `${user}`,
        },
      })
      .then((res) => {
        setUserid(res.data.Userid);
        setFname(res.data.Fname);
        setLname(res.data.Lname);
        setMoNum(res.data.MoNum);
        setCountry(res.data.country);
        setPassword(res.data.Password);
      });
  }, [single, Function]);

  const UpdateData = (e) => {
    let user = localStorage.getItem("token");

    axios.put(
      "http://localhost:4000/enterData/Update",
      {
        _id: single,
        Userid: Userid,
        Fname: Fname,
        Lname: Lname,
        MoNum: MoNum,
        country: country,
        Password: Password,
      },
      {
        headers: {
          token: `${user}`,
        },
      }
    );
  };

  return (
    <div>
      <h1>Update Form</h1>
      <label>Userid</label>
      <input
        type="Userid"
        placeholder="Userid"
        defaultValue={Userid}
        onChange={(e) => setUserid(e.target.value)}
      />

      <label>Fname</label>
      <input
        type="Fname"
        placeholder="Fname"
        defaultValue={Fname}
        onChange={(e) => setFname(e.target.value)}
      />

      <label>Lname</label>
      <input
        type="Lname"
        placeholder="Lname"
        defaultValue={Lname}
        onChange={(e) => setLname(e.target.value)}
      />

      <label>MoNum</label>
      <input
        type="MoNum"
        placeholder="MoNum"
        defaultValue={MoNum}
        onChange={(e) => setMoNum(e.target.value)}
      />

      <label>country</label>
      <input
        type="country"
        placeholder="country"
        defaultValue={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <label>Password</label>
      <input
        type="Password"
        placeholder="Password"
        defaultValue={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={() => UpdateData()}>
        Update
      </button>
    </div>
  );
};

export default UpdateForm;
