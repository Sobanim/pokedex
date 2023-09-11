import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import {Box, Button, Container, Grid} from "@mui/material";
import PokemonAvatar from "./PokemonAvatar";
import PokemomBasicInfo from "./PokemomBasicInfo";
import PokemonStats from "./PokemonStats";

const PokemonDetail = () => {
    let {pokemonName} = useParams()
    const {pokemon, isLoading} = usePokemon({pokemonName})

    useEffect(() => {
        document.title = `${pokemon?.name} - Pokedex`
    })

    return (
        <div>
            <Container sx={{letterSpacing: '2px'}} maxWidth={"lg"} disableGutters>
                <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} spacing={2} mt={2}>
                    <Grid container alignItems={"center"} justifyContent={"center"} spacing={2}>
                        {isLoading ? (
                            <Box>Loading...</Box>
                        ): pokemon ? (
                            <>
                                <Grid item xs={12} sm={4} p={2}>
                                    <PokemonAvatar pokemon={pokemon} />
                                </Grid>
                                <Grid item xs={12} sm={6} p={0}>
                                    <PokemomBasicInfo pokemon={pokemon} />
                                    <PokemonStats pokemon={pokemon} />
                                </Grid>
                            </>
                        ) : (
                            <Box>Pokemon not found</Box>
                        )}
                    </Grid>
                    <Grid item>
                        <Button component={Link} to={"/"} variant={"contained"}>
                            Go Back
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default PokemonDetail;