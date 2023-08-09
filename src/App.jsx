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
import * as Edit from './pages/private-edits';
import * as Create from './pages/private-creates';
import * as Delete from './pages/private-deletes';

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
          <Route path={`/admin/create/resume`} element={
            <Create.ResumeTextPage />
          } />
          <Route path={`/admin/create/projects`} element={
            <Create.ProjectTextPage />
          } />
          <Route path={`/admin/create/blogs`} element={
            <Create.BlogMediaPage />
          } />
          <Route path={`/admin/create/pictures`} element={
            <Create.PictureMediaPage />
          } />
          <Route path={`/admin/create/portfolio`} element={
            <Create.PortfolioPage />
          } />
          <Route path={`/admin/edit/resume`} element={
            <Edit.ResumeTextPage />
          } />
          <Route path={`/admin/edit/projects`} element={
            <Edit.ProjectTextPage />
          } />
          <Route path={`/admin/edit/blogs`} element={
            <Edit.BlogMediaPage />
          } />
          <Route path={`/admin/edit/pictures`} element={
            <Edit.PictureMediaPage />
          } />
          <Route path={`/admin/edit/portfolio`} element={
            <Edit.PortfolioPage />
          } />
          <Route path={`/admin/delete/resume`} element={
            <Delete.ResumeTextPage />
          } />
          <Route path={`/admin/delete/projects`} element={
            <Delete.ProjectTextPage />
          } />
          <Route path={`/admin/delete/blogs`} element={
            <Delete.BlogMediaPage />
          } />
          <Route path={`/admin/delete/pictures`} element={
            <Delete.PictureMediaPage />
          } />
          <Route path={`/admin/delete/portfolio`} element={
            <Delete.PortfolioPage />
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
