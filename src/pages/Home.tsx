import usePokemons from "../hooks/usePokemons";
import PokemonList from "../components/PokemonList";
import {Button, Container} from "@mui/material";

const Home = () => {
    const {pokemons, hasMorePokemon, fetchNextPage} = usePokemons()
    return (
        <Container>
            <PokemonList pokemons={pokemons} />
            {hasMorePokemon ?
                (
                <Button variant={"contained"} onClick={fetchNextPage}>
                    Load more Pokemons
                </Button>
                ): null}
        </Container>
    )
}

export default Home;