import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ServiceSinglePage from './components/ServiceSinglePage'
import Contact from './components/Contact';
import About from './components/About';
import Prices from './components/Prices';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceSinglePage />} />
          <Route path="prices" element={<Prices />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
