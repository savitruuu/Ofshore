import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes wrapped in Layout for consistent header/footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Placeholder routes for Ofshore functionality */}
          <Route path="creator/:id" element={<NotFound />} />
          <Route path="creator/onboarding" element={<NotFound />} />
          <Route path="product/:id" element={<NotFound />} />
          <Route path="explore" element={<NotFound />} />
          <Route path="dashboard" element={<NotFound />} />
          <Route path="library" element={<NotFound />} />
          <Route path="faq" element={<NotFound />} />
          <Route path="docs" element={<NotFound />} />
          <Route path="terms" element={<NotFound />} />
          <Route path="privacy" element={<NotFound />} />

          {/* Catch-all for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
