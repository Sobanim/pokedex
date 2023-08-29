export interface IndexedPokemon {
    name: string
    url: string
}

export interface PokemonListResponce {
    count: number
    next: string | null
    previous: string | null
    results: IndexedPokemon[]
}

export interface ListPokemon {
    name: string
    url: string
    image: string
    pokedexNumber: number
}