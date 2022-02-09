import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight
} from 'react-native';
import React from 'react';

interface Props {
  onSubmit: Function;
  setTitle: Function;
  title: String;
}

const CreateNote: React.FC<Props> = ({onSubmit, setTitle, title}) => {
  const handleCreate = () => {
    onSubmit();
  };

  return (
    <View style={styles.containter}>
      <Text style={styles.title}>Create a new note</Text>
      <TextInput
        style={styles.input}
        maxLength={20}
        placeholder="Note name here.."
        placeholderTextColor="#999999"
        defaultValue={title.toString()}
        onChangeText={text => setTitle(text)}
      />
      <TouchableHighlight>
        <Button title="Add Note" color={'#2a7dd1'} onPress={handleCreate} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    padding: 15
  },
  title: {
    fontSize: 22,
    marginTop: 15,
    fontFamily: 'Montserrat',
    color: '#2a7dd1'
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    marginBottom: 7,
    borderRadius: 5,
    fontFamily: 'Montserrat',
    borderColor: '#2a7dd1',
    color: 'black'
  }
});

export default CreateNote;
