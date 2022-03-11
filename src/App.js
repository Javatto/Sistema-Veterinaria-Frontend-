import { BrowserRouter, Routes, Route} from "react-router-dom";
import Veterinario from "./components/Veterinario.jsx";
import Menu from "./components/Login/Menu.jsx";
import BuscarCliente from './components/BuscarCliente.jsx';
import {LogoutButton} from './components/Login/Logout.jsx';
import RegistrarConsulta from './components/RegistrarConsulta.jsx'
import HistorialConsulta from './components/HistorialConsulta.jsx'

const App = () => {

  return (
    <BrowserRouter>
      <LogoutButton></LogoutButton>
      <Routes>
        <Route path="/" element={<Menu></Menu>}></Route>
        <Route path="/veterinario" element={<Veterinario></Veterinario>}></Route>
        <Route path="/veterinario/historial" element={<HistorialConsulta></HistorialConsulta>}></Route>
        <Route path="/veterinario/consulta" element={<RegistrarConsulta></RegistrarConsulta>}></Route>
        <Route path="/cliente" element={<BuscarCliente/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
