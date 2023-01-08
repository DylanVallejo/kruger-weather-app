import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
// import Loading from './components/Loading';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Header/>
      <Weather/>
      <Footer/>
    </div>
  );
}

export default App;
