import React from "react";
import { WebView } from 'react-native-webview';

function Product ({ route }) {
  const { product } = route.params;

  return (
    <WebView source={{ uri: product.url }} />
  )
};

export default Product;