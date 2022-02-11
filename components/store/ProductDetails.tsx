import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

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

const ProductDetails: React.FC<Props> = ({product}) => {
  return <View></View>;
};
const styles = StyleSheet.create({});
export default ProductDetails;
