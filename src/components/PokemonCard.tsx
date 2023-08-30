import {ListPokemon} from '../interfaces/pokemon.interfaces'
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getColorFromUrl} from "../utils/colors";

interface PokemonCardProps {
  pokemon: ListPokemon
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    const [pokemonColor, setPokemonColor] = useState<string | null>(null)

    const getPokemonColor = async () => {
        const color = await getColorFromUrl(pokemon.image)
        if (color) setPokemonColor(color)
    }

    useEffect(() => {
        getPokemonColor()
    }, [])
  return (
        <Card sx={{backgroundColor: pokemonColor, width: '100%'}}>
            <CardActionArea>
                <CardMedia component={"img"} image={pokemon.image} title={pokemon.name} sx={{height: 100, objectFit: "contain"}}/>
                <CardContent>
                    <Box sx={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                        <Typography sx={{textTransform: 'capitalize'}}>{pokemon.name}</Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
  )
}

export default PokemonCard
