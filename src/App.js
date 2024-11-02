import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeContext, { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import './styles/sharedStyles.css';
import './styles/themes.css';
import './styles/responsive.css';

// import About from './pages/About';
// import Work from './pages/Work';
// import Contact from './pages/Contact';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import ProjectHighlight from './components/ProjectHighlight/ProjectHighlight';
// import WorkExamples from './components/WorkExamples/WorkExamples';
// import ContactModal from './components/Contact/ContactModal';
// import Footer from './components/Footer/Footer';
// import logo from './logo.svg';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as needed */}
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
