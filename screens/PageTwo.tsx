import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {getPokemons} from '../components/pokemons/client';

export default function PageTwo() {
  let [pokemon, setPokemon] = useState<String>('');
  const get = async () => {
    try {
      const poke = await getPokemons();
      setPokemon((pokemon = poke));
    } catch (error) {
      console.error(error);
    }
  };
  get();
  return (
    <View>
      <Text style={{color: 'black'}}>{pokemon}</Text>
    </View>
  );
}
