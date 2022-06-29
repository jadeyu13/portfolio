import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './pages/Projects';
import Error from './pages/Error';
import Menu from './components/Menu';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
