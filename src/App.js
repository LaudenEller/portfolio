import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import './styles/sharedStyles.css';
import './styles/themes.css';
import './styles/responsive.css';
import { AboutProvider } from './contexts/AboutContext';

function App() {

  return (
    <ThemeProvider>
      <AboutProvider>
      <ThemedApp />
      </AboutProvider>
    </ThemeProvider>
  );
}

function ThemedApp() {
  // Apply the cursor style globally on the body element
  React.useEffect(() => {
    document.body.style.cursor = 'url(/assets/mouse-image/mouse2.jpeg) 32 32, auto';
    return () => {
      document.body.style.cursor = 'auto'; // Reset cursor style on unmount
    };
  }, []);
  return (
    <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here if needed */}
          </Routes>
        </MainLayout>
    </Router>
  );
}

export default App;