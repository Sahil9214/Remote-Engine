import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientDeveloperLogin from "../Components/ClientDeveloperLogin";
import ClientSignup from "../Components/ClientSignup";

import DeveloperPage from "../Components/DeveloperPage";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientDeveloperLogin />} />
      <Route path="/client" element={<ClientSignup />} />

      <Route path="/developerPage" element={<DeveloperPage />} />
    </Routes>
  );
};

export default AllRouter;
