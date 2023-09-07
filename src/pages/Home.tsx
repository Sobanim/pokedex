import usePokemons from "../hooks/usePokemons";
import PokemonList from "../components/PokemonList";
import {Box, Button, Container, Typography} from "@mui/material";

const Home = () => {
    const {pokemons, hasMorePokemon, fetchNextPage} = usePokemons()
    return (
        <Container>
            <Typography className={'text-stroke3'} variant={'h1'} component={'h1'} sx={{color: '#f4dc26'}}>
                Pokedex
            </Typography>

            <PokemonList pokemons={pokemons} />
            <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
                {hasMorePokemon ?
                    (
                        <Button variant={"contained"} onClick={fetchNextPage}>
                            Load more Pokemons
                        </Button>
                    ): null}
            </Box>
        </Container>
    )
}

export default Home;