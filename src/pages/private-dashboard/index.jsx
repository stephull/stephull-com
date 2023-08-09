import React from 'react';
import { Link } from 'react-router-dom';

const PrivateDashboardPage = () => {
  return (
    <>
      <h3>Admin Dashboard</h3>
      <nav>
        <ul>
          <li>
            <Link to={`/admin/resume`}>Edit Resume</Link>
          </li>
          <li>
            <Link to={`/admin/projects`}>Edit Projects</Link>
          </li>
          <li>
            <Link to={`/admin/blogs`}>Edit Blog Posts</Link>
          </li>
          <li>
            <Link to={`/admin/pictures`}>Edit Picture Posts</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default PrivateDashboardPage;