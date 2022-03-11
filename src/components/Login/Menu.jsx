import logo from '../../images/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Perfil';

function App() {
    const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al sistema de Administración de la Veterinaría.
        </p>

        {isAuthenticated ? (
          <>
            <Profile/>
        <div>
            <h3>Menu para Auxiliares</h3>
            <ul>
                <li>
                    <a href="/cliente"> Regitro de Clintes </a>
                </li>
                <li>
                    <a href="#"> Regitro de Mascotas </a>
                </li>
                <li>
                    <a href="#"> Actualizar Datos </a>
                </li>
            </ul>    
            <h3>Menu para Veterinarios</h3>
            <ul>
                <li>
                    <a href="/veterinario/consulta"> Nueva Consulta </a>
                </li>
                <li>
                    <a href="#"> Registro de Mascotas </a>
                </li>
            </ul>
            <h3>Menu para Clientes</h3>
            <ul>
                <li>
                    <a href="#"> Ver mis Mascotas </a>
                </li>
                <li>
                    <a href="/veterinario/historial"> Ver histprial de mi mascota </a>
                </li>
                <li>
                    <a href="#"> Mascota en tiempo real </a>
                </li>
                <li>
                    <a href="#"> Realizar un pago </a>
                </li>

            </ul>
        </div>

            <LogoutButton />
            <br></br>
          </>
        ) : ( 
          <LoginButton />
        )}
        
      </header>
      
    </div>
  );
}

export default App;
