import logo from '../../images/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Perfil';
import { Navigate } from "react-router-dom";

function App() {

    const { isAuthenticated } = useAuth0();

    if (isAuthenticated === true) {
        return <Navigate to="/cliente" />;
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Bienvenido al sistema de Administración de la Veterinaría.
                </p>
                <LoginButton />
            </header>
            
        </div>
    );
}

export default App;
