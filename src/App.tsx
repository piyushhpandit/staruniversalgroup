import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Events from './pages/Events';
import Foundation from './pages/Foundation';
import Travel from './pages/Travel';
import AboutUs from './pages/Events/aboutUs';
import ContactUs from './pages/ContactUs';
import Clients from './pages/Events/clients';
import Images from './pages/Events/images';
import Nepal from './pages/Travel/Tours/nepal';
import India from './pages/Travel/Tours/india';
import BuddhaCircuit from './pages/Travel/Tours/buddhaCircuit';
import HolidayPackage from './pages/Travel/Tours/holidayPackage';
import Donation from './pages/Foundation/donation';
import FoundationAboutUs from './pages/Foundation/foundationaboutus';
import Gallery from './pages/Foundation/gallery';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/foundation" element={<Foundation />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/eventclients" element={<Clients />} />
      <Route path="/eventimages" element={<Images />} />
      <Route path="/nepal" element={<Nepal />} />
      <Route path="/buddhacircuit" element={<BuddhaCircuit />} />
      <Route path="/india" element={<India />} />
      <Route path="/holidaypackage" element={<HolidayPackage />} />
      <Route path="/donations" element={<Donation />} />
      <Route path="/foundationaboutus" element={<FoundationAboutUs />} />
      <Route path="/foundationgallery" element={<Gallery />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;