function PersonajeCard({ personaje }) {
    const {
        name,
        imageUrl,
        films = [],
        shortFilms = [],
        tvShows = [],
        videoGames = [],
        parkAttractions = [],
        allies = [],
        enemies = [],
        sourceUrl
    } = personaje;
    return (
        <article className="personaje-card">
            <div className="personaje-imagen-contenedor">

                {imageUrl ? (
                    <img
                        className="personaje-imagen"
                        src={imageUrl}
                        alt={name || "Personaje de Disney"}
                        loading="lazy"
                    />
                ) : (
                    <div className="sin-imagen">
                        Imagen no disponible
                    </div>
                )}
            </div>
            <div className="personaje-info">
                <h2>{name || "Personaje sin nombre"}</h2>
                <div className="personaje-datos">
                    <p>
                        <strong>ID:</strong> {personaje._id}
                    </p>
                    <p>
                        <strong>Películas:</strong> {films.length}
                    </p>
                    <p>
                        <strong>Cortometrajes:</strong>{" "}
                        {shortFilms.length}
                    </p>
                    <p>
                        <strong>Series:</strong> {tvShows.length}
                    </p>
                    <p>
                        <strong>Videojuegos:</strong>{" "}

                        {videoGames.length}
                    </p>
                    <p>
                        <strong>Atracciones:</strong>{" "}

                        {parkAttractions.length}
                    </p>
                    <p>
                        <strong>Aliados:</strong> {allies.length}
                    </p>
                    <p>
                        <strong>Enemigos:</strong> {enemies.length}
                    </p>
                </div>
                {films.length > 0 && (
                    <div className="personaje-lista">
                        <h3>Películas destacadas</h3>
                        <ul>
                            {films.slice(0, 3).map((pelicula, index) => (
                                <li key={`${pelicula}-${index}`}>
                                    {pelicula}
                                </li>

                            ))}
                        </ul>
                    </div>
                )}

                {tvShows.length > 0 && (
                    <div className="personaje-lista">
                        <h3>Series</h3>
                        <ul>
                            {tvShows.slice(0, 2).map((serie, index) => (
                                <li key={`${serie}-${index}`}>

                                    {serie}
                                </li>

                            ))}
                        </ul>
                    </div>

                )}

                {sourceUrl && (
                    <a
                        className="personaje-enlace"
                        href={sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ver fuente del personaje ↗
                    </a>

                )}
            </div>
        </article>

    );

}

export default PersonajeCard;

