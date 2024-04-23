import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate(); // Obtiene la función de navegación

    //funcion para redireccionar a la pantalla de videos 
    const handleNavigateToVideos = () => {
        navigate('/videos'); // Navega a la ruta '/videos' al hacer clic en el elemento de Videos
    };

    // Función para redireccionar a la pantalla de inicio (home)
    const handleNavigateToHome = () => {
        navigate('/home'); // Navega a la ruta '/home' al hacer clic en el elemento de Home
    };

    return (
        <aside>
            <h1>Play<span>app</span></h1>
            <div className="proyectos">
                <div className="menu-list">
                    <ul>
                        <li>
                            <i className="fas fa-home" onClick={handleNavigateToHome}></i> {/* Agrega onClick para navegar */}
                            <span className="menu-item" onClick={handleNavigateToHome}>Playlists</span>{/* Agrega onClick para navegar */}
                        </li>
                        <li>
                            <i className="fas fa-video" onClick={handleNavigateToVideos}></i> {/* Agrega onClick para navegar */}
                            <span className="menu-item" onClick={handleNavigateToVideos}>Videos</span>{/* Agrega onClick para navegar */}
                        </li>
                    </ul>
                </div>
            </div>

        </aside>
    );
}

export default Sidebar;