import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Container from './components/layout/Container';
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import React from "react";

export default function App(){
  return(
    <Router>
     <div>
       <Link to="/">Home</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/company">Company</Link>
       <Link to="/newproject">New Project</Link>
       <li>Contact</li>
      </div> 
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="company/*" element={<Company />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="newproject/*" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}
