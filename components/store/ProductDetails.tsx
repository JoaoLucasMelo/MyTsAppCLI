import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

const ProductDetails = () => {
  const route = useRoute();

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const product = route.params?.product as {
    id: Number;
    title: String;
    price: Number;
    description: String;
    category: String;
    image: String;
    rating: {rate: Number; count: Number};
  };

  return (
    <ScrollView style={{height: screenHeight}}>
      <View style={styles.containerImage}>
        <Image
          style={{height: 300, width: screenWidth, resizeMode: 'contain'}}
          source={{uri: product.image}}
        />
      </View>
      <View style={[styles.justify]}>
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Text style={styles.price}>Price: ${product.price}</Text>
      </View>
    </ScrollView>
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
    paddingBottom: 5,
    paddingHorizontal: 20
  },
  description: {
    fontSize: 16,
    alignSelf: 'flex-start',
    color: 'gray',
    paddingHorizontal: 15
  },
  category: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontWeight: '500',
    color: '#595959'
  },
  price: {
    fontSize: 24,
    padding: 15,
    color: 'dodgerblue'
  },
  justify: {
    justifyContent: 'space-between'
  }
});
export default ProductDetails;
