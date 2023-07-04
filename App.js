import React from 'react';
import RestaurantList from './RestaurantComponent/RestaurantList';
import MealList from './MealComponent/MealList';
import Header from './HeaderComponent/Header';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

const App = () => {
  return (
        <View style={styles.container}>
          <Header />       

          <View style={styles.containerMeal}>
            
            
              <MealList />
            
          </View>
        </View>
  );
};


const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9CEAC',
    marginTop: 0,
    height: screenHeight+200,
  },
  containerMeal: {
    height: '100%'
  }
});

export default App;