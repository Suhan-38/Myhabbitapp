import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Addhabit from './Pages/Addhabit';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Addhabit />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
