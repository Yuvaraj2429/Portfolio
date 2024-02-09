import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import './components/style.css';

function App() {
  return (
    <BrowserRouter scrollRestoration="auto">
        <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
