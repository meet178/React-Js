import React, { useEffect, useState } from "react";
// import Form from "./Form";
import axios from "axios";
import UpdateForm from "./Form";

const GetData = () => {
  const [data, setData] = useState([]);
  const [Id, setId] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    let user = localStorage.getItem("token");

    axios
      .get("http://localhost:4000/enterData/getdata", {
        headers: {
          token: `${user}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }

  const DataUpdate = (_id) => {
    setId(_id);
  };

  const DataDelete = (_id) => {
    let user = localStorage.getItem("token");

    axios
      .delete(`http://localhost:4000/enterData/delete?_id=${_id}`, {
        headers: {
          token: `${user}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        getUser();
      });
  };

  const arr = data.map((curElem, key) => {
    return (
      <tr key={key}>
        <td>{curElem._id}</td>
        <td>{curElem.Userid}</td>
        <td>{curElem.Fname}</td>
        <td>{curElem.Lname}</td>
        <td>{curElem.MoNum}</td>
        <td>{curElem.country}</td>
        <td>
          <button onClick={() => DataUpdate(curElem._id)}>Edit</button>
          <button onClick={() => DataDelete(curElem._id)}>Delete</button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <UpdateForm single={Id} Function={() => getUser()} keval={"asdb"} />
      <h1 align="center">All Data</h1>
      <table border="4" align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Userid</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>MoNum</th>
            <th>country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{arr}</tbody>
      </table>

      <hr />
      <hr />
    </div>
  );
};

export default GetData;
