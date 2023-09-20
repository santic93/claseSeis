import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './Contacto/Contacto';
import Home from './Home/Home';
import Layout from './Layout/Layout';
import Nosotros from './Nosotros/Nosotros';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
