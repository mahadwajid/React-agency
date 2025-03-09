import Navbar from "./Componenets/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from 'react-router-dom';
import LearnMorePage from "./Pages/Learnmore";
import ServicesSection from "./Pages/Services";
import ContactUsPage from "./Pages/Contactuspage";



function App() {
  return (
  //   <div>
  //   <Navbar />
  //   <Home />
    
  // </div>

  <Routes>
    {/* <Route path="/Navbar" element={<Navbar />} /> */}
    <Route path="/" element={<Home />} />
    <Route path="/LearnMore/:title" element={<LearnMorePage />} />
    <Route path="/Service" element={<ServicesSection />} />
    <Route path="/ContactPage" element={<ContactUsPage />} />
  </Routes>
  );
}

export default App;
