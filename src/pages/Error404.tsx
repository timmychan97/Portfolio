import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '../components/Divider';

export default function Error404() {
  return (
    <div className="content-wrapper-centered">
      <div className="page-content-margined">
        <h1 className="page-title">Error 404</h1>
        <Divider />
        <p>Not found...</p>
        <div>Go back to <Link to="/">Home</Link></div>
      </div>
    </div>
  );
}
