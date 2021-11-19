import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import ProfileInfo from "./ProfileInfo";
import ContentNav from "../_common/ContentNav";

const Settings = () => {
  return (
    <>
      <ContentNav
        links={[
          { name: "Информация об аккаунте", path: "info" },
          { name: "Настройки аккаунта", path: "change-settings" },
        ]}
      />
      <Routes>
        <Route path="info" element={<ProfileInfo />} />
        <Route path="change-settings" element={<ChangePassword />} />
        <Route path="" element={<Navigate replace to="/settings/info" />} />
      </Routes>
    </>
  );
};

export default Settings;
