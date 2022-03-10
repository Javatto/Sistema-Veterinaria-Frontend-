import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {

    const {user, isAuthenticated, isLoading} = useAuth0();

    if (isLoading)
        return <div> Cargando... </div>

    return(
        isAuthenticated && (
            <div>
            <h2>Usuario: {user.email}</h2>
            </div>
        )
    );
};