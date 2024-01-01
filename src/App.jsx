import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPages/AuthPage";
import PageLayout from "./Layouts/PageLayout/pageLayout";


const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
