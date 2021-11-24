import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Blog from './Components/Blog/blog';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Home from './pages/Home/home';
import LoadingScreen from './pages/Loading Screen/loadingScreen';

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
            <Route path="/blog" element={<Blog />} />
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
