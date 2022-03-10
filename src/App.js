import { BrowserRouter, Routes, Switch, Route} from "react-router-dom";
import Veterinario from "./components/Veterinario.jsx";
import MenuInicio from "./components/Login/MenuInicio.jsx";
import BuscarCliente from './components/BuscarCliente.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuInicio></MenuInicio>}></Route>
        <Route path="/veterinario" element={<Veterinario></Veterinario>}></Route>
        <Route path="/cliente" element={<BuscarCliente/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
