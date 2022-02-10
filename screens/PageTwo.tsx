import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button
} from 'react-native';
import {getPokemons} from '../components/pokemons/client';
import {Pokemon} from '../components/pokemons/pokemonsModal';

export default function PageTwo() {
  let [pokemon, setPokemon] = useState<Pokemon>();
  let [name, setName] = useState<String>('');

  const windowHeight = Dimensions.get('window').width;

  const get = async () => {
    try {
      const poke = await getPokemons(name.toLowerCase());
      const newPoke = new Pokemon(poke.data);
      if (newPoke) {
        setPokemon((pokemon = newPoke));
        console.log(newPoke);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (name) {
      await get();
      setName('');
      // console.log(pokemon?.name);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        maxLength={20}
        placeholder="Pokemon Name..."
        placeholderTextColor="#999999"
        defaultValue={name.toString()}
        onChangeText={text => setName(text)}
      />
      <TouchableHighlight style={styles.button}>
        <Button title="Find Pokemon" color={'#2a7dd1'} onPress={handleSubmit} />
      </TouchableHighlight>
      <View style={{justifyContent: 'center'}}>
        <Image
          style={{
            height: windowHeight,
            width: '100%'
          }}
          source={{
            uri: pokemon?.img
          }}
        />
      </View>
      <Text style={styles.pokeName}>
        {pokemon
          ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          : ''}{' '}
        {pokemon ? '#' + pokemon.id : ''}
      </Text>
      <Text style={styles.pokeStats}>
        {pokemon
          ? 'Type: ' +
            pokemon.type.charAt(0).toUpperCase() +
            pokemon.type.slice(1)
          : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pokeName: {
    fontSize: 34,
    color: 'black',
    marginLeft: 30,
    marginTop: 20
  },
  pokeStats: {
    fontSize: 25,
    color: 'black',
    marginLeft: 30,
    marginTop: 20
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    marginBottom: 0,
    padding: 10,
    borderRadius: 5,
    fontFamily: 'Montserrat',
    borderColor: '#2a7dd1',
    color: 'black'
  },
  button: {
    marginHorizontal: 20,
    marginTop: 10
  }
});
