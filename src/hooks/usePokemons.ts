import {useEffect, useState} from "react";
import {IndexedPokemon, ListPokemon, PokemonListResponce} from "../interfaces/pokemon.interfaces";
import {POKEMON_API_POKEMON_URL, POKEMON_IMG_BASE_URL} from "../constants";
import {httpClient} from "../api/httpClient";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<ListPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    const fetchPokemon = async () => {
        if (nextUrl) {
            const result = await httpClient.get<PokemonListResponce>(nextUrl)
            if (result?.data?.results) {
                const listPokemons = result.data.results.map (p => indxPokemonToListPokemon(p))
                setPokemons(listPokemons)
            }
        }
    }

    const indxPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
        const pokedexNumber = parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, "").replace("/", ""))

        const listPokemon: ListPokemon = {
            name: indexedPokemon.name,
            url: indexedPokemon.url,
            image: `${POKEMON_IMG_BASE_URL}/${pokedexNumber}.gif`,
            pokedexNumber: pokedexNumber
        }
        return listPokemon
    }

    useEffect( () => {
        fetchPokemon()
    }, [fetchPokemon])

    return {
        pokemons
    }
}

export default usePokemons