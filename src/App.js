import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import About from './pages/About';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
