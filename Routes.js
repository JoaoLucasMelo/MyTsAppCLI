import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import ProductDetails from './components/store/ProductDetails'
import Store from './screens/Store'

const Routes = () => (
   <Router>
      <Stack key = "root">
         <Scene key = "store" component = {Store} title = "Store" />
         <Scene key = "product" component = {ProductDetails} title = "ProductDetails" />
      </Stack>
   </Router>
)
export default Routes