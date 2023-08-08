import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate as Nav
} from "react-router-dom";

import AppBody from './components/appbody';
import Header from './components/header';
import Footer from './components/footer';

import HomePage from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import ProjectsPage from "./pages/projects";
import ResumePage from "./pages/resume";
import TimelinePage from './pages/timeline';
import ContactPage from "./pages/contact";

import ApiPingRequest from "./pages/ping";
import PrivateDashboardPage from './pages/private-dashboard';

const App = () => {
  return (
    <Router>
      <Header />
      <AppBody>
        <Routes>
          <Route exact path="/" element={
            <Nav to="/home" />
          } />
          <Route exact path="/home" element={
            <HomePage />
          } />
          <Route exact path="/portfolio" element={
            <PortfolioPage />
          } />
          <Route exact path="/projects" element={
            <ProjectsPage />
          } />
          <Route exact path="/timeline" element={
            <TimelinePage />
          } />
          <Route exact path="/resume" element={
            <ResumePage />
          } />
          <Route exact path="/contact" element={
            <ContactPage />
          } />
          <Route exact path="/ping" element={
            <ApiPingRequest />
          } />
          <Route path="/admin" element={
            <PrivateDashboardPage />
          } />
          <Route exact path="*" element={
            <Nav to="/home" />
          } />
        </Routes>
      </AppBody>
      <Footer />
    </Router>
  );
};

export default App;