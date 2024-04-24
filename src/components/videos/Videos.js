import React, { useState } from 'react';

const Videos = () => {
    // Array de prueba con datos de videos
    const playlistVideos = [
        { name: "Video 1" },
        { name: "Video 2" },
        { name: "Video 3" },
        { name: "Video 1" },
        { name: "Video 2" },
        { name: "Video 3" },
        { name: "Video 1" },
        { name: "Video 2" },
        { name: "Video 3" },
        { name: "Video 1" },
        { name: "Video 2" },
        { name: "Video 3" },
        { name: "Video 2" },
        { name: "Video 3" },
        { name: "Video 2" },
        { name: "Video 3" },
        { name: "Video 1" },
        { name: "Video 2" },
        { name: "Video 3" },
        { name: "Video 2" },
        { name: "Video 3" },
    ];

    const [showForm, setShowForm] = useState(false);
    const [videoName, setVideoName] = useState("");
    const [videoURL, setVideoURL] = useState("");
    const [buttonText, setButtonText] = useState("Agregar Videos");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Nombre del video:", videoName);
        console.log("URL del video:", videoURL);
        setVideoName("");
        setVideoURL("");
    };

    const handleNavigateToHome = () => {
        console.log("Navigating to home...");
    };

    const handleCancel = () => {
        setShowForm(false);
        setButtonText("Agregar Videos");
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "50px",
                }}
            >
                <button
                    className="btn btn-primario"
                    onClick={() => {
                        setShowForm(!showForm);
                        setButtonText(showForm ? "Agregar Videos" : "Cancelar");
                    }}
                >
                    {showForm ? "Cancelar" : "Agregar Videos"}
                </button>
            </div>
            <div style={{ marginTop: "40px", marginBottom: "20px" }}>
                {!showForm ? (
                    <div
                        className="video-list-container"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                            gap: "20px",
                            marginTop: "20px",
                            marginLeft: "30px",
                            marginRight: "30px",
                        }}
                    >
                        {playlistVideos.map((video, index) => (
                            <div key={index} className="video-item">
                                <h3>{video.name}</h3>
                                <img
                                    src="/images/play-music.png"
                                    alt={`Thumbnail for ${video.name}`}
                                    style={{ width: "150px", height: "auto" }}
                                />
                                <div className="video-options">
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div className="contenedor-form sombra-dark">
                            <form onSubmit={handleSubmit}>
                                <div className="campo-form">
                                    <label htmlFor="email">Nombre</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Escribe el nombre"
                                        value={videoName}
                                        onChange={(e) => setVideoName(e.target.value)}
                                    />
                                </div>
                                <div className="campo-form">
                                    <label htmlFor="url">URL</label>
                                    <input
                                        type="text"
                                        id="url"
                                        name="url"
                                        placeholder="Escribe una url"
                                        value={videoURL}
                                        onChange={(e) => setVideoURL(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <div className="campo-form">
                                        <input
                                            type="submit"
                                            className="btn btn-primario btn-block"
                                            value="Guardar"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Videos;
