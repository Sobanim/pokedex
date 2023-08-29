import {useEffect, useState} from "react";
import {IndexedPokemon, PokemonListResponce} from "../interfaces/pokemon.interfaces";
import {POKEMON_API_POKEMON_URL} from "../constants";
import {httpClient} from "../api/httpClient";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<IndexedPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    const fetchPokemon = async () => {
        if (nextUrl) {
            const result = await httpClient.get<PokemonListResponce>(nextUrl)
            if (result?.data?.results) setPokemons(result.data.results)
        }
    }

    useEffect( () => {
        fetchPokemon()
    }, [fetchPokemon])

    return {
        pokemons
    }
}

export default usePokemons