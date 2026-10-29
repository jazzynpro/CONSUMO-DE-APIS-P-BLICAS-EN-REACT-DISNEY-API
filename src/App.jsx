import { useEffect, useState } from "react";
import PersonajeCard from "./components/PersonajeCard";
 
function App() {
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
 
    useEffect(() => {
        async function obtenerPersonajes() {
            try {
                const respuesta = await fetch(
                    "https://api.disneyapi.dev/character?page=2"
                );
 
                if (!respuesta.ok) {
                    throw new Error("No se pudieron cargar los personajes");
                }
 
                const datos = await respuesta.json();
 
                setPersonajes(datos.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        }
 
        obtenerPersonajes();
    }, []);
 
    if (cargando) {
        return <p className="mensaje">Cargando personajes...</p>;
    }
 
    if (error) {
        return <p className="mensaje error">{error}</p>;
    }
 
    return (
<main className="contenedor">
<header className="encabezado">
<h1>Personajes Disney</h1>
<p>
                    Recordando a los personajes de nuestra infancia.
</p>
</header>
 
            <section className="personajes-grid">
                {personajes.map((personaje) => (
<PersonajeCard
                        key={personaje.id}
                        personaje={personaje}
                    />
                ))}
</section>
</main>
    );
}
 
export default App;