import {ListPokemon} from "../interfaces/pokemon.interfaces";

interface PokemonListProps {
    pokemons: ListPokemon[]
}
const PokemonList = ({ pokemons }: PokemonListProps) => {
    return (
        <>
            {pokemons.length > 0 ? pokemons.map( (p) => {
                return (
                    <div key={p.name}>
                        <img src={p.image} alt={p.name} title={p.name}/>
                        {p.name}
                    </div>
                )
            }) : null}
        </>

    );
}

export default PokemonList;