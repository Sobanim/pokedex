import React, {useEffect, useState} from 'react';
import {DetailPokemon} from "../interfaces/pokemon.interfaces";
import {getColorFromUrl} from "../utils/colors";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

interface PokemonAvatar {
    pokemon: DetailPokemon
}

const PokemonAvatar = ({pokemon}: PokemonAvatar) => {


    return (
        <Card sx={{backgroundColor: pokemon.color}}>
            <CardMedia component={'img'} sx={{height: 150, objectFit: 'contain'}} image={pokemon.sprites.other["dream_world"].front_default} title={pokemon.name} />
            <CardContent>
                <Box className={'text-stroke1'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography sx={{textTransform: 'capitalize', color:'white'}}>
                        {pokemon.name}
                    </Typography>
                    <Typography sx={{textTransform: 'capitalize', color:'white'}}>
                        #{pokemon.id}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default PokemonAvatar;