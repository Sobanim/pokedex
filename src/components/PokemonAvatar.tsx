import React from 'react';
import {DetailPokemon} from "../interfaces/pokemon.interfaces";
import {Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";

interface PokemonAvatar {
    pokemon: DetailPokemon
}

const PokemonAvatar = ({pokemon}: PokemonAvatar) => {

    return (
        <Card sx={{backgroundColor: pokemon.color, padding: '10px'}}>
            <CardMedia component={'img'} sx={{height: 150, objectFit: 'contain'}} image={pokemon.sprites.other["dream_world"].front_default} title={pokemon.name} />
            <CardContent>
                <Stack className={'text-stroke1'} alignItems={"center"}>
                    <Typography sx={{textTransform: 'capitalize', color:'white'}}>
                        {pokemon.name}
                    </Typography>
                    <Typography sx={{textTransform: 'capitalize', color:'white'}}>
                        #{pokemon.id}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default PokemonAvatar;