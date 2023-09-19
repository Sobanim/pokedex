import usePokemons from "../hooks/usePokemons";
import PokemonList from "../components/PokemonList";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {IndexedType} from "../interfaces/pokemon.interfaces";

const Home = () => {
    const {pokemons, hasMorePokemon, fetchNextPage, pokemonTypes, setPokemons, setSelectedType} = usePokemons()

    const handleSelectType = (type: IndexedType | null) => {
        if (type) {
            setSelectedType(type)
        } else {
            setPokemons([]);
            setSelectedType(null)
        }
    }

    return (
        <Container>
            <Typography className={'text-stroke3'} variant={'h1'} component={'h1'} sx={{color: '#f4dc26'}}>
                Pokédex
            </Typography>

            <Grid container spacing={2} mt={1}>
                <Grid container item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                    {pokemonTypes.map((type) => (
                        <Button
                        variant="contained"
                        sx={{
                            "&.MuiButton-contained": {
                              backgroundColor: type.color
                            },
                            m: 1,
                        }}
                        onClick={() => handleSelectType(type)}
                        >{type.name}</Button>
                    ))}
                </Grid>
                <Grid container item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                    <PokemonList pokemons={pokemons} />
                    <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
                        {hasMorePokemon ?
                            (
                                <Button variant={"contained"} onClick={fetchNextPage}>
                                    Load more Pokemons
                                </Button>
                            ): null}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;