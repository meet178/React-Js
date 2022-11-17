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
        <td><h6>{curElem._id}</h6></td>
        <td><h6>{curElem.Userid}</h6></td>
        <td><h6>{curElem.Fname}</h6></td>
        <td><h6>{curElem.Lname}</h6></td>
        <td><h6>{curElem.MoNum}</h6></td>
        <td><h6>{curElem.country}</h6></td>
        <td>
          <button onClick={() => DataUpdate(curElem._id)} className="btn btn-primary"><h6>Edit</h6></button>
          <button onClick={() => DataDelete(curElem._id)} className="btn btn-danger"><h6>Delete</h6></button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <UpdateForm single={Id} Function={() => getUser()} keval={"asdb"} />
      <h1 align="center">All Data</h1>
      <table border="4" align="center" className="table">
        <thead>
          <tr>
            <th><h5>Id</h5></th>
            <th><h5>Userid</h5></th>
            <th><h5>Fname</h5></th>
            <th><h5>Lname</h5></th>
            <th><h5>MoNum</h5></th>
            <th><h5>Country</h5></th>
            <th><h5>Action</h5></th>
          </tr>
        </thead>
        <tbody>{arr}</tbody>
      </table>

    </div>
  );
};

export default GetData;
