import {ListPokemon} from '../interfaces/pokemon.interfaces'
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {getColorFromUrl} from "../utils/colors";
import {Link} from "react-router-dom";

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
                <Link to={`pokemon/${pokemon.name}`} style={{textDecoration: 'none'}}>
                    <CardMedia component={"img"} image={pokemon.image} title={pokemon.name} sx={{height: 100, objectFit: "contain", marginTop: '20px'}}/>
                    <CardContent>
                        <Box sx={{display: 'flex', justifyContent: 'center', color: 'white'}}>
                            <Typography className={'text-stroke1'} sx={{textTransform: 'capitalize', fontFamily: 'Pokemon Solid', color: 'white', letterSpacing: '3px'}}>{pokemon.name}</Typography>
                        </Box>
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
  )
}

export default PokemonCard
