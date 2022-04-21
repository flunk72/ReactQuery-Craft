import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ChangePassword from "./ChangeSettings";
import ContentNav from "../_common/ContentNav";

const Settings = () => {
  return (
    <>
      <ContentNav
        links={[{ name: "Настройки аккаунта", path: "change-settings" }]}
      />
      <Routes>
        <Route path="change-settings" element={<ChangePassword />} />
        <Route path="" element={<Navigate replace to="change-settings" />} />
      </Routes>
    </>
  );
};

export default Settings;
