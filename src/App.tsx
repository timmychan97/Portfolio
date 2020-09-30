import React, { useContext } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import SettingsPage from './pages/SettingsPage';
import Error404 from './pages/Error404';
import AboutMePage from './pages/AboutMePage';
import Overlay from './components/Overlay';

import { ThemeContext } from './contexts/ThemeContextProvider';
import OverlayContextProvider from './contexts/OverlayContextProvider';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  const themeContext = useContext(ThemeContext);

  return (
    // State also contains the updater function so it will
    // be passed down into the context provider

    <BrowserRouter>
      <OverlayContextProvider>
        <div className={"App " + themeContext.theme}>
          <header>
            <Header />
          </header>
          <main className="Content">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route exact path="/home" component={HomePage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route path="/about me" component={AboutMePage} />
              <Route path="/settings" component={SettingsPage} />
              <Route path="" component={Error404} />
            </Switch>
          </main>
          <Footer />
          <Overlay />
        </div>
      </OverlayContextProvider>
    </BrowserRouter>
  );
}
