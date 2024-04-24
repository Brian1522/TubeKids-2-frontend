import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPlayList } from "../../redux/playlists/playListAction";
import Modal from "../modal/modal";

const Playlists = () => {

    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
    ]


    const dispatch = useDispatch();
    const user = useSelector((state) => state.authentication.user);
    const playlists = useSelector((state) => state.playlists.playlists);
    const [isTrigger, setIsTrigger] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);


    useEffect(() => {
        // Verificar si el usuario este en el estado
        if (user && !isTrigger) {
            // llama a la funcion de obtener playlist
            setIsTrigger(true);
            dispatch(getPlayList(user));
        }
        // eslint-disable-next-line
    }, [user]);

    const handleViewPlaylist = (playlist) => {
      setSelectedPlaylist(playlist);
      setIsOpen(true);
    };


    console.log(playlists);
    return (
        <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Nombre</th> 
              <th></th> 
            </tr>
          </thead>
          <tbody>
            {playlists.map((playlist, key) => {
              return (
                <tr key={key}>
                  <td>{playlist.user_name}</td>
                  <td>{playlist.name}</td>
                  <td><i className="fas fa-eye"  style={{ color: "forestgreen", cursor: "pointer" }}  onClick={() => handleViewPlaylist(playlist)}/></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {isOpen && <Modal setIsOpen={setIsOpen}  isOpen={isOpen} playlist={selectedPlaylist} />}
      </div>
    );
    
};

export default Playlists;
