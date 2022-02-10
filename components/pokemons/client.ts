import { create } from 'apisauce';
import { Pokemon } from './pokemonsModal';

const api = create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});


export const getPokemons = (name: String) => { return api.get<Pokemon>(name.toString()) }

