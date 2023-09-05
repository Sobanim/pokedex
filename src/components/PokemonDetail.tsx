import React from 'react';
import {useParams} from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import {Box, Container, Grid} from "@mui/material";
import PokemonAvatar from "./PokemonAvatar";

const PokemonDetail = () => {
    let {pokemonName} = useParams()
    const {pokemon, isLoading} = usePokemon({pokemonName})

    return (
        <div>
            <Container>
                <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} spacing={2} mt={1}>
                    <Grid container flexDirection={"column"} alignItems={"center"} justifyContent={"center"} spacing={2}>
                        {isLoading ? (
                            <Box>Loading...</Box>
                        ): pokemon ? (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <PokemonAvatar pokemon={pokemon} />
                                </Grid>
                            </>
                        ) : (
                            <Box>Pokemon not found</Box>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default PokemonDetail;