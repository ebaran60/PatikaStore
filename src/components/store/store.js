import { View, Text,Image } from 'react-native';
import React from 'react';

import styles from './store.styles';

const store = ({ Data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: Data.imgURL }} />
      <View style={styles.body}>
        <Text style={styles.title}>{Data.title}</Text>
        <Text style={styles.price}>{Data.price}</Text>
        <Text style={styles.stock}>{Data.inStock ? ' ' : 'STOK YOK' }</Text>
      </View>
    </View>
  );
};
export default store