import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="App-Button-out" onClick={() => logout({ returnTo: window.location.origin })}> Cerrar sesión </button>
  );
};