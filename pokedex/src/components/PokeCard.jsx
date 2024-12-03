import { useEffect, useState } from "react";
import { getFullPokedexNumber, getPokedexNumber } from "../utils";
import TypeCard from "./TypeCard";

export default function PokeCard({ selectedPokemon }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { name, types, sprites, stats, moves } = data || {};

    useEffect(() => {
        if (loading || !localStorage) return;

        let cache = {};
        if (localStorage.getItem("pokedex")) {
            try {
                cache = JSON.parse(localStorage.getItem("pokedex"));
            } catch {
                console.error("Error parsing localStorage. Clearing cache.");
                localStorage.removeItem("pokedex");
            }
        }

        if (cache[selectedPokemon]?.name) {
            setData(cache[selectedPokemon]);
            return;
        }

        async function fetchPokemonData() {
            setLoading(true);
            setError(null);
            try {
                const baseURL = "https://pokeapi.co/api/v2";
                const suffix = `pokemon/${getPokedexNumber(selectedPokemon)}`;
                const response = await fetch(`${baseURL}/${suffix}`);
                if (!response.ok) throw new Error("Failed to fetch Pokémon data.");
                const pokemonData = await response.json();
                setData(pokemonData);

                cache[selectedPokemon] = pokemonData;
                localStorage.setItem("pokedex", JSON.stringify(cache));
            } catch (err) {
                console.error(err.message);
                setError("Failed to fetch Pokémon data.");
            } finally {
                setLoading(false);
            }
        }

        fetchPokemonData();
    }, [selectedPokemon]);

    if (loading) return <div><h3>Loading Pokémon data...</h3></div>;
    if (error) return <div><h3>{error}</h3></div>;

    const largeImagePath = `/pokemon/${getFullPokedexNumber(selectedPokemon)}.png`;

    return (
        <div className="poke-card">
            <div>
                <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
                <h2>{name || "Unknown Pokémon"}</h2>
            </div>
            <div className="type-container">
                {types?.map((typeObj, typeIndex) => (
                    <TypeCard key={typeIndex} type={typeObj?.type?.name} />
                ))}
            </div>
            <img 
                className="default-img" 
                src={largeImagePath} 
                alt={`${name || "Unknown Pokémon"}-large-image`} 
            />
            <h3>Stats</h3>
            <div className="stats-card">
                {stats?.map((statObj, statIndex) => {
                    const { stat, base_stat } = statObj;
                    return (
                        <div key={statIndex} className='stat-item'>
                            <p>{stat?.name.replaceAll('-', '')}</p>
                            <h4>{base_stat}</h4>
                        </div>
                    );
                })}
            </div>
            <h3>Moves</h3>
            <div className="pokemon-move-grid">
                {moves?.map((moveObj, moveIndex) => (
                    <button 
                        className="button-card pokemon-move" 
                        key={moveIndex} 
                        onClick={() => {}}>
                        <p>{moveObj?.move?.name.replaceAll('-', '')}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
