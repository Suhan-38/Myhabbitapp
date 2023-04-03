import './App.css';
import { BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Addhabit from './Pages/Addhabit';
function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Addhabit />} />
    </Routes>
    </HashRouter>
  );
}

export default App;
