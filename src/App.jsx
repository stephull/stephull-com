import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate as Nav
} from "react-router-dom";
import { randomRoute as r } from './utils/envConfig';
import AppBody from './components/appbody';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import BlogsPage from "./pages/blogs";
import PortfolioPage from "./pages/portfolio";
import ProjectsPage from "./pages/projects";
import MediaPage from "./pages/media";
import ResumePage from "./pages/resume";
import ContactPage from "./pages/contact";
import ErrorPage from "./pages/error-404";
import PrivateAdminPage from "./pages/admin/index";
import PrivateAdminSigninPage from './pages/admin-signin/index';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <Header />
      <AppBody>
        <Routes>
          <Route exact path="/" element={
            <HomePage />
          } />
          <Route exact path="/about" element={
            <AboutPage />
          } />
          <Route exact path="/blogs" element={
            <BlogsPage />
          } />
          <Route exact path="/portfolio" element={
            <PortfolioPage />
          } />
          <Route exact path="/projects" element={
            <ProjectsPage />
          } />
          <Route exact path="/media" element={
            <MediaPage />
          } />
          <Route exact path="/resume" element={
            <ResumePage />
          } />
          <Route exact path="/contact" element={
            <ContactPage />
          } />
          <Route exact path="/404" element={
            <ErrorPage />
          } />
          <Route exact path={`/${r}`} element={
            <PrivateAdminPage />
          } />
          <Route exact path={`/signin`} element={
            <PrivateAdminSigninPage />
          } />
          <Route exact path="*" element={
            <Nav to="/404" />
          } />
        </Routes>
      </AppBody>
      <Footer />
    </Router>
  );
};

export default App;