import {useEffect, useState} from "react";
import {DetailPokemon} from "../interfaces/pokemon.interfaces";
import {POKEMON_API_POKEMON_URL} from "../constants";
import {httpClient} from "../api/httpClient";
import {getColorFromUrl} from "../utils/colors";

interface UsePokemonProps {
    pokemonName: string | undefined;
}

const usePokemon = ({pokemonName}: UsePokemonProps) => {
    const [pokemon, setPokemon] = useState<DetailPokemon | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect( () => {
        if (pokemon) {
            getPokemonColor()
        }
    }, [pokemon])

    useEffect(() => {
        if (pokemonName) {
            fetchPokemon();
        }
    }, [pokemonName])

    const getPokemonColor = async () => {
        if (pokemon?.sprites?.other["dream_world"]?.front_default) {
            const color = await getColorFromUrl(pokemon.sprites.other["dream_world"]?.front_default)
            if (color) setPokemon({...pokemon, color})
        }
    }

    const fetchPokemon = async() => {
        if (pokemonName) {
            setIsLoading(true)
            const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`
            const result = await httpClient.get<DetailPokemon>(url)
            if (result?.data) {
                setPokemon(result.data)
            }
            setIsLoading(false)
        }
    }
    return {
        pokemon,
        isLoading
    };
}
export default usePokemon;