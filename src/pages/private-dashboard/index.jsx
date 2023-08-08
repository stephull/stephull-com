import React from 'react';
import { 
  Route, 
  Routes, 
  Link, 
  useResolvedPath 
} from 'react-router-dom';

import PrivateBlogPostEditPage from '../private-edits/blog-post.private-edits';
import PrivatePicturePostEditPage from '../private-edits/picture-post.private-edits';
import PrivateProjectTextEditPage from '../private-edits/project-text.private-edits';
import PrivateResumeTextEditPage from '../private-edits/resume-text.private-edits';

const PrivateDashboardPage = () => {
  let { path } = useResolvedPath('').pathname;

  return (
    <>
      <h3>Admin Dashboard</h3>
      <nav>
        <ul>
          <li>
            <Link to={`${path}/resume`}>Edit Resume</Link>
          </li>
          <li>
            <Link to={`${path}/projects`}>Edit Projects</Link>
          </li>
          <li>
            <Link to={`${path}/blogs`}>Edit Blog Posts</Link>
          </li>
          <li>
            <Link to={`${path}/pictures`}>Edit Picture Posts</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path={`${path}/resume`} element={
            <PrivateResumeTextEditPage />
          } />
          <Route path={`${path}/projects`} element={
            <PrivateProjectTextEditPage />
          } />
          <Route path={`${path}/blogs`} element={
            <PrivateBlogPostEditPage />
          } />
          <Route path={`${path}/pictures`} element={
            <PrivatePicturePostEditPage />
          } />
        </Routes>
      </main>
    </>
  )
}

export default PrivateDashboardPage;