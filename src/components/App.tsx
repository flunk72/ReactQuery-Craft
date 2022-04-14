import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import localeRU from "antd/lib/locale-provider/ru_RU";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClient from "../queryClient";
import Layout from "./_common/Layout";
import { Styles } from "./App.styled";
import "antd/dist/antd.css";
import Home from "./Home";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={localeRU}>
        <BrowserRouter>
          <Main />
          <Styles />
        </BrowserRouter>
      </ConfigProvider>

      <ReactQueryDevtools
        position="bottom-right"
        toggleButtonProps={{ style: { filter: "opacity(0.1)" } }}
      />
    </QueryClientProvider>
  );
}

function Main() {
  if (window.location.href === "http://localhost:3000/") return <Home />;
  return <RatingCraft />;
}

const RatingCraft = () => {
  return <Layout />;
};
