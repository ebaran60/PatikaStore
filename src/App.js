import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList, TextInput, ScrollView } from "react-native";
import Store from "./components/store";
import product_data from "../product_data.json";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="ara.." />
      <FlatList
        data={product_data}
        numColumns={2}
        renderItem={({ item }) => <Store Data={item} />}
        keyExtractor={(item) => item.id}
      />  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "eceff1",
    margin: 10,
    
  },
  title: {
    color: "#8b008b",
    fontWeight: "bold",
    fontSize: 40,
    paddingTop: 35,
    marginLeft: 10,
  },
  input: {
    backgroundColor: "#efefef",
    height: 40,
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default App;