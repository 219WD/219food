import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Preload from './components/Preload/Preload.jsx';
import Menu from './pages/Menu.jsx';

const HomeScreen = lazy(() => import('./pages/HomeScreen.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>219Food - Menús Online | Pide Comida Fácilmente</title>
        <link rel="icon" type="image/svg+xml" href="/src/assets/Logo.svg" />
        <meta
          name="description"
          content="219Food es tu servicio de menús online para pedir comida de manera rápida y sencilla a través de nuestra página."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "219Food",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dirección de ejemplo 123",
              "addressLocality": "Ciudad de ejemplo",
              "addressRegion": "Provincia de ejemplo",
              "postalCode": "0000",
              "addressCountry": "AR",
            },
            "telephone": "+541123456789",
            "description":
              "219Food ofrece menús online para que puedas pedir comida de forma fácil y rápida. Descubre nuestra amplia variedad de platos y haz tu pedido ahora.",
            "url": "https://219food.com/",
          })}
        </script>
      </Helmet>
      <Suspense fallback={<Preload />}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
