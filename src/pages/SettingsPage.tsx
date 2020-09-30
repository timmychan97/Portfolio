import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import Divider from '../components/Divider';
import './SettingsPage.css';

export default function SettingsPage() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="content-wrapper-centered">
      <div className="page-content-margined">
        <h1 className="page-title">Settings</h1>
        <Divider />
        <div className="settings-panel">
          <label htmlFor="themes">Choose a theme:</label>
          <select name="themes" defaultValue={themeContext.theme} onChange={(e) => themeContext.setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <br></br>
        <p>In the future there might be more themes available.</p>
      </div>
    </div>
  );
}
