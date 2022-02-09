import { create } from 'apisauce';
import { useState } from 'react';

const api = create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
});


export const getPokemons = async () => {

    let [name, setName] = useState('')

    try {
        const res: Object = await api.get<Object>('charmander')
        setName(res.data.name)
        console.log(name)
        return name.toString()
    } catch (error) {
        console.error(error);
    }
}