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
import PrivateBlogPostEditPage from './pages/private-edits/blog-post.private-edits';
import PrivatePicturePostEditPage from './pages/private-edits/picture-post.private-edits';
import PrivateProjectTextEditPage from './pages/private-edits/project-text.private-edits';
import PrivateResumeTextEditPage from './pages/private-edits/resume-text.private-edits';

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
          <Route path={`/admin/resume`} element={
            <PrivateResumeTextEditPage />
          } />
          <Route path={`/admin/projects`} element={
            <PrivateProjectTextEditPage />
          } />
          <Route path={`/admin/blogs`} element={
            <PrivateBlogPostEditPage />
          } />
          <Route path={`/admin/pictures`} element={
            <PrivatePicturePostEditPage />
          } />
          <Route path={'*'} element={
            <Nav to="/home" />
          } />
        </Routes>
      </AppBody>
      <Footer />
    </Router>
  );
};

export default App;