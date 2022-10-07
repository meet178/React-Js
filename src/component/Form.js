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
  }, [single]);

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
      <h1 align="center" ><b>Update Form</b></h1>
      <br />
      <h4 align="center">
      <br />
      <label ><b>Userid</b></label>
      <br />
      <input
        type="Userid"
        placeholder="Userid"
        defaultValue={Userid}
        onChange={(e) => setUserid(e.target.value)}
      />
      <br />

      <br />
      <label><b>Fname</b></label>
      <br />
      <input
        type="Fname"
        placeholder="Fname"
        defaultValue={Fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <br />

      <br />
      <label>Lname</label>
      <br />
      <input
        type="Lname"
        placeholder="Lname"
        defaultValue={Lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <br />

      <br />
      <label>MoNum</label>
      <br />
      <input
        type="Number"
        placeholder="MoNum"
        defaultValue={MoNum}
        onChange={(e) => setMoNum(e.target.value)}
      />
      <br />

      <br />
      <label>country</label>
      <br />
      <input
        type="country"
        placeholder="country"
        defaultValue={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <br />

      <br />
      <label>Password</label>
      <br />
      <input
        type="Password"
        placeholder="Password"
        defaultValue={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <br />
      <br />
      <button type="button" onClick={() => UpdateData()} className="btn btn-primary">
        <h6>Update</h6>
      </button>
      </h4>
      <hr />
    </div>
  );
};

export default UpdateForm;
