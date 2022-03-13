import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage, SponsorPage, StorePage } from './pages';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage  />} />
    <Route path="/about" element={<AboutPage  />} />
    <Route path="/about/shop" element={<StorePage  />} />
    <Route path="/sponsor" element={<SponsorPage  />} />
  </Routes>
 );

export default App;
