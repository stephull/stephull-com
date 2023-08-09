import React from 'react';
import { Link } from 'react-router-dom';

const PrivateDashboardPage = () => {
  return (
    <>
      <h3>Admin Dashboard</h3>
      <nav>
        <span>Create</span>
        <ul>
          <li>
            <Link to={`/admin/create/resume`}>
              Create Resume Post
            </Link>
          </li>
          <li>
            <Link to={`/admin/create/projects`}>
              Create Project Post
            </Link>
          </li>
          <li>
            <Link to={`/admin/create/blogs`}>
              Create Blog Post
            </Link>
          </li>
          <li>
            <Link to={`/admin/create/pictures`}>
              Create Picture Post
            </Link>
          </li>
          <li>
            <Link to={`/admin/create/portfolio`}>
              Create Portfolio Post
            </Link>
          </li>
        </ul>
        <br />
        <span>Update</span>
        <ul>
          <li>
            <Link to={`/admin/edit/resume`}>
              Edit Resume Posts
            </Link>
          </li>
          <li>
            <Link to={`/admin/edit/projects`}>
              Edit Project Posts
            </Link>
          </li>
          <li>
            <Link to={`/admin/edit/blogs`}>
              Edit Blog Posts
            </Link>
          </li>
          <li>
            <Link to={`/admin/edit/pictures`}>
              Edit Picture Posts
            </Link>
          </li>
          <li>
            <Link to={`/admin/edit/portfolio`}>
              Edit Portfolio Posts
            </Link>
          </li>
        </ul>
        <br />
        <span>Delete</span>
        <ul>
          <li>
            <Link to={`/admin/delete/resume`}>
              Delete Resume Post
            </Link>
          </li>
          <li>
            <Link to={`/admin/delete/projects`}>
              Delete Project Post
            </Link>
          </li>
          <li>
            <Link to={`/admin/delete/blogs`}>
              Delete Blog Post
            </Link>
          </li>
          <li>
            <Link to={`/admin/delete/pictures`}>
              Delete Picture Post
            </Link>
          </li>
          <li>
            <Link to={`/admin/delete/portfolio`}>
              Delete Portfolio Post
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default PrivateDashboardPage;