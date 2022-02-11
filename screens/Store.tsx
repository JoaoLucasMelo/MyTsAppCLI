import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text
} from 'react-native';
import {getProducts} from '../components/store/client';
import Product from '../components/store/Product';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Store = () => {
  let [products, setProducts] = useState<
    Array<{
      id: Number;
      title: String;
      price: Number;
      description: String;
      category: String;
      image: String;
      rating: {rate: Number; count: Number};
    }>
  >();

  const handleGet = async () => {
    const productsApi = await getProducts();
    setProducts((products = productsApi.data));
  };
  handleGet();
  return (
    <SafeAreaView>
      <ScrollView style={styles.containter}>
        <FlatList
          data={products}
          numColumns={2}
          horizontal={false}
          renderItem={({item}) => <Product product={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containter: {}
});
export default Store;
