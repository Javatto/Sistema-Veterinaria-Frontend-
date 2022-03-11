import { BrowserRouter, Routes, Route} from "react-router-dom";
import Veterinario from "./components/Veterinario.jsx";
import MenuInicio from "./components/Login/MenuInicio.jsx";
import BuscarCliente from './components/BuscarCliente.jsx';
import {LogoutButton} from './components/Login/Logout.jsx';

const App = () => {
  //<Route path="/" element={<MenuInicio></MenuInicio>}></Route>
  return (
    <BrowserRouter>
      <LogoutButton></LogoutButton>
      <Routes>
        <Route path="/" element={<BuscarCliente></BuscarCliente>}></Route>
        <Route path="/veterinario" element={<Veterinario></Veterinario>}></Route>
        <Route path="/cliente" element={<BuscarCliente/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
