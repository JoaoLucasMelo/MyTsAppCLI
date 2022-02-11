import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

interface Props {
  product: {
    id: Number;
    title: String;
    price: Number;
    description: String;
    category: String;
    image: String;
    rating: {rate: Number; count: Number};
  };
}

const Product: React.FC<Props> = ({product}) => {
  const screenWidth = Dimensions.get('window').width / 2;

  return (
    <View style={[styles.containterOut, {width: screenWidth}]}>
      <TouchableOpacity activeOpacity={0.9}>
        <View style={styles.containter}>
          <Image
            style={{height: 150, width: 150, resizeMode: 'contain'}}
            source={{uri: product.image}}
          />
          <Text numberOfLines={1} style={styles.title}>
            {product.title}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {product.description}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containterOut: {
    padding: 5
  },
  containter: {
    padding: 15,
    height: 300,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 18,
    elevation: 4
  },
  title: {
    color: 'black',
    fontSize: 16,
    paddingTop: 5,
    alignSelf: 'flex-start',
    fontWeight: '500',
    paddingBottom: 6
  },
  price: {
    color: 'dodgerblue',
    alignSelf: 'flex-start',
    fontSize: 20
  },
  description: {
    fontSize: 13,
    alignSelf: 'flex-start',
    color: 'black',
    paddingBottom: 15
  }
});
export default Product;
