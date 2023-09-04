import usePokemons from "../hooks/usePokemons";
import PokemonList from "../components/PokemonList";
import {Button, Container, Typography} from "@mui/material";

const Home = () => {
    const {pokemons, hasMorePokemon, fetchNextPage} = usePokemons()
    return (
        <Container>
            <Typography className={'text-stroke3'} variant={'h1'} component={'h1'} sx={{color: '#f4dc26'}}>
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