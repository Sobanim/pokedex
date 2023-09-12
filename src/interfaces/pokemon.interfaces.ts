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

export interface IndexedPokemonByType {
    pokemon: IndexedPokemon;
    slot: string;
}

export interface PokemonByTypeListResponce {
    id: number;
    pokemon: IndexedPokemonByType[];
}

export interface ListPokemon {
    name: string
    url: string
    image: string
    pokedexNumber: number
}

export interface PokemonAbility {
    ability: {
        name: string;
        url: string;
    },
    is_hidden: boolean;
    slot: number;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface PokemonType {
    slot: number;
    type: {
        name: string
        url: string
    }
}
export interface DetailPokemon {
    id: number;
    name: string;
    types: PokemonType[];
    weight: string;
    height: string;
    abilities: PokemonAbility[];
    sprites: {
        other: {
            "dream_world": {
                front_default: string;
            }
        }
    }
    stats: PokemonStat[];
    color: string | null;
}

export interface IndexedType {
    name: string;
    url: string;
    color: string;
}