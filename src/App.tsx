import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Home } from './pages/Home';
import { Demo } from './pages/Demo';
import { Signup } from './pages/Signup';
import { ContactLeads } from './pages/ContactLeads';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact-leads" element={<ContactLeads />} />
      </Routes>
    </Router>
  );
}