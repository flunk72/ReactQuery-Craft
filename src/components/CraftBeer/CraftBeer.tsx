import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RussianCraft from "./RussianCraft";
import ImportCraft from "./ImportCraft";
import ContentNav from "../_common/ContentNav";

const CraftBeer = () => {
  return (
    <>
      <ContentNav
        links={[
          { name: "Российский крафт", path: "russia" },
          { name: "Импортный крафт", path: "import" },
        ]}
      />
      <Routes>
        <Route path="russia" element={<RussianCraft />} />
        <Route path="import" element={<ImportCraft />} />
        <Route path="" element={<Navigate replace to="russia" />} />
      </Routes>
    </>
  );
};

export default CraftBeer;
