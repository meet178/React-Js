import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SingUp from "./SignUpForm";
import UpdateForm from "./Form";
import GetData from "./getData";
import LoginForm from "./LoginForm";

const ReactRouter = () => {
  function PrivateRoute({ children }) {
    const auth = localStorage.getItem("token");
    return auth ? children : <Navigate to="/LoginForm" />;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/SignUp"
            element={
              <PrivateRoute>
                <SingUp />
              </PrivateRoute>
            }
          />
          <Route
            path="/GetData"
            element={
              <PrivateRoute>
                <GetData />
              </PrivateRoute>
            }
          />
          <Route path="/UpdateData" element={<PrivateRoute><UpdateForm /></PrivateRoute>} />
          <Route path="/LoginForm" element={<LoginForm />} />
          <Route
            path="/Private"
            element={
              <PrivateRoute>
                <SingUp />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;
