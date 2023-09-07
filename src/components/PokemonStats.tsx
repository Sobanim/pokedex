import React from 'react';
import {Grid, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {DetailPokemon} from "../interfaces/pokemon.interfaces";

interface PokemonStatsProps {
    pokemon: DetailPokemon
}
const PokemonStats = ({pokemon}: PokemonStatsProps) => {
    return (
            <Grid container justifyContent={"center"} spacing={2}>
                <Grid item>
                    { pokemon ? (
                        <Table size={"small"}>
                            <TableHead>
                                <TableRow>
                                    {pokemon.stats.map((stat) => {
                                        return <TableCell sx={{textTransform: 'capitalize'}}>
                                            {stat.stat.name}
                                        </TableCell>
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pokemon.stats.map((stat) => {
                                    return <TableCell>{stat.base_stat}</TableCell>
                                })}
                            </TableBody>
                        </Table>
                    ) : null }
                </Grid>
            </Grid>
    );
};

export default PokemonStats;