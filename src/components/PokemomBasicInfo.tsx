import React from 'react';
import {DetailPokemon} from "../interfaces/pokemon.interfaces";
import {Grid, Typography} from "@mui/material";


interface PokemonBasicInfoProps {
    pokemon: DetailPokemon
}
const PokemomBasicInfo = ({pokemon}: PokemonBasicInfoProps) => {
    return (
            <Grid
                container sx={{textTransform: 'capitalize'}} justifyContent={'center'} textAlign={"center"} spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="subtitle2">Height</Typography>
                    <Typography variant="body2">{pokemon.height}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2">Weight</Typography>
                    <Typography variant="body2">{pokemon.weight}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2">Types</Typography>
                    <Typography variant="body2">{pokemon.types.map((type) => {
                        return (
                            <Typography variant={"body2"}>
                                {type.type.name}
                            </Typography>
                        )
                    })}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2">Abilities</Typography>
                    <Typography variant="body2">{pokemon.abilities.map((ability) => {
                        return (
                            <Typography variant={"body2"}>
                                {ability.ability.name}
                            </Typography>
                        )
                    })}</Typography>
                </Grid>
            </Grid>
    );
};

export default PokemomBasicInfo;