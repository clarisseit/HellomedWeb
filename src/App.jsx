
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/HomePage';
import AboutUs from '../src/AboutUs';
import ContactPage from '../src/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
