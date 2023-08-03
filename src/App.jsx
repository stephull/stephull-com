import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate as Nav
} from "react-router-dom";
//import { randomRoute as r } from './envConfig'

import AppBody from './components/appbody';
import Header from './components/header';
import Footer from './components/footer';

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import ProjectsPage from "./pages/projects";
import MediaPage from "./pages/media";
import ResumePage from "./pages/resume";
import ContactPage from "./pages/contact";

const App = () => {
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
          <Route exact path="/portfolio" element={
            <PortfolioPage />
          } />
          <Route exact path="/projects" element={
            <ProjectsPage />
          } />
          <Route exact path="/timeline" element={
            <MediaPage />
          } />
          <Route exact path="/resume" element={
            <ResumePage />
          } />
          <Route exact path="/contact" element={
            <ContactPage />
          } />
          <Route exact path="*" element={
            <Nav to="/" />
          } />
        </Routes>
      </AppBody>
      <Footer />
    </Router>
  );
};

export default App;