import { useState, useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
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
          <Footer />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
