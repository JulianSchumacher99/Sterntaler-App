import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Home from './pages/Home/home';
import LoadingScreen from './pages/Loading Screen/loadingScreen';
import Notizen from './pages/Notizen/notizen';
import Ratgeber from './pages/Ratgeber/ratgeber';

function App(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Ratgeber />} />
            <Route path="/notizen" element={<Notizen />} />
          </Routes>
          <Footer />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
