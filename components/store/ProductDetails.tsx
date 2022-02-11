import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ProductDetails = () => {
  const route = useRoute();

  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <View style={styles.containerImage}>
        <Image
          style={{height: 300, width: screenWidth, resizeMode: 'contain'}}
          source={{uri: route.params.product.image}}
        />
      </View>
      <Text style={styles.title}>{route.params.product.title}</Text>
      <Text style={styles.description}>{route.params.product.description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerImage: {
    backgroundColor: 'white',
    padding: 5
  },
  title: {
    color: 'black',
    fontSize: 20,
    paddingTop: 10,
    alignSelf: 'flex-start',
    fontWeight: '500',
    paddingBottom: 15,
    paddingHorizontal: 20
  },
  description: {
    fontSize: 16,
    alignSelf: 'flex-start',
    color: 'gray',
    paddingHorizontal: 15
  }
});
export default ProductDetails;
