import usePokemons from "../hooks/usePokemons";
import PokemonList from "../components/PokemonList";
import {Button, Container, Typography} from "@mui/material";

const Home = () => {
    const {pokemons, hasMorePokemon, fetchNextPage} = usePokemons()
    return (
        <Container>
            <Typography variant={'h2'} component={'h2'} sx={{textAlign: 'center', fontFamily: 'Pokemon Hollow'}}>
                Pokedex
            </Typography>

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