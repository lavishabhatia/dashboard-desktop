import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./component/layout/PageLayout";
import Login from "./component/form/Login";
import Dashboard from "./component/dashboard/Dashboard";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<PageLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="" element={<PageLayout isImageFull={true} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
