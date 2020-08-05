import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import api from "../../services/api";

let page = 1;

function Main({ navigation }) {
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState({});

  const loadProducts = async () => {
    try {
      const response = await api.get(`/products?page=${page}`);
      const { docs, ...productInfo } = response.data;
      setProducts([...products, ...docs]);
      setProductInfo(productInfo);
    } catch (error) {
      console.warn(error);
    }
  }

  const loadMore = () => {
    if(page === productInfo.pages) return;
    page += 1;
    loadProducts();
  };

  const renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text styles={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity 
        style={styles.productButton} 
        onPress={() => {
          navigation.navigate("Product", { product: item });
        }}
      >
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}

export default Main;