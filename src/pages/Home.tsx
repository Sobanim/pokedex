import usePokemons from "../hooks/usePokemons";
import PokemonList from "../components/PokemonList";

const Home = () => {
    const {pokemons} = usePokemons()
    return (
        <PokemonList pokemons={pokemons} />
    )
}

export default Home;