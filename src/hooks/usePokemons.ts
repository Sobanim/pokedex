import {useEffect, useState} from "react";
import {IndexedPokemon, IndexedType, ListPokemon, PokemonListResponce, PokemonByTypeListResponce} from "../interfaces/pokemon.interfaces";
import {POKEMON_API_POKEMON_URL, POKEMON_IMG_BASE_URL, POKEMON_TYPES} from "../constants";
import {httpClient} from "../api/httpClient";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<ListPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)

    const [selectedType, setSelectedType] = useState<IndexedType | null>(null)

    const fetchPokemon = async () => {
        if (nextUrl) {
            const result = await httpClient.get<PokemonListResponce>(nextUrl)
            if (result?.data?.results) {
                const listPokemons = result.data.results.map (p => indxPokemonToListPokemon(p))
                setPokemons([...pokemons, ...listPokemons])
                setNextUrl(result.data.next)
            }
        }
    }

    const indxPokemonToListPokemon = (indexedPokemon: IndexedPokemon) => {
        const pokedexNumber = parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, "").replace("/", ""))

        const listPokemon: ListPokemon = {
            name: indexedPokemon.name,
            url: indexedPokemon.url,
            image: `${POKEMON_IMG_BASE_URL}/${pokedexNumber}.png`,
            pokedexNumber: pokedexNumber
        }
        return listPokemon
    }

    useEffect( () => {
        if (selectedType) {
            fetchPokemonsByType()
        } else {
            fetchPokemon();
        }
    }, [selectedType])

    const fetchPokemonsByType = async () => {
        if (selectedType) {
            const result = await httpClient.get<PokemonByTypeListResponce>(selectedType.url);
            if (result?.data?.pokemon) {
                const listPokemons = result.data.pokemon.map(p => indxPokemonToListPokemon(p.pokemon))
                setPokemons(listPokemons);
                setNextUrl(POKEMON_API_POKEMON_URL);
            }
        }
    }

    return {
        pokemons,
        fetchNextPage: fetchPokemon,
        hasMorePokemon: !! nextUrl,
        pokemonTypes: POKEMON_TYPES,
        selectedType,
        setSelectedType,
        setPokemons
    }
}

export default usePokemons