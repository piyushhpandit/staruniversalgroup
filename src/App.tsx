import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Events from './pages/Events';
import Foundation from './pages/Foundation';
import Travel from './pages/Travel';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/foundation" element={<Foundation />} />
      <Route path="/travel" element={<Travel />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;