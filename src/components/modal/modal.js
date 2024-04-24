import React from "react";

const Modal = ({ isOpen, setIsOpen, playlist }) => {
  console.log(playlist);
  return (
    <>
      {isOpen && (
        <>
          <div className="darkBG" onClick={() => setIsOpen(false)} />
          <div className="centered">
            <div className="modal">
              <div className="modalHeader">
                <h5 className="heading">{playlist.name}</h5>
                <button className="closeBtn" onClick={() => setIsOpen(false)}>
                  <i className="fas fa-times" style={{ marginBottom: "-3px" }} />
                </button>
              </div>
              <div className="modalContent">
                <div  style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                  <table className="table" style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                      <tr>
                      <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nombre</th>
                      <th style={{ border: "1px solid #ddd", padding: "8px" }}>URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {playlist.videos.map((video, key) => {
                        return (
                          <tr key={key} style={{ border: "1px solid #ddd" }}>
                            <td style={{ border: "1px solid #ddd" }} >{video.name}</td>
                            <td style={{ border: "1px solid #ddd" }}><a href={video.url} target="_blank" rel="noopener noreferrer">{video.url}</a></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;