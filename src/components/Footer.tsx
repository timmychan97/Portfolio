import React from 'react';
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <p className="content-wrapper">Copyright &copy; {(new Date()).getFullYear()} Timmy Chan | All rights reserved </p>
    </footer>
  );
}
