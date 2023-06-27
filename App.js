import React from 'react';
import RestaurantList from './RestaurantComponent/RestaurantList';
import MealList from './MealComponent/MealList';
import Header from './HeaderComponent/Header';
import { View, Image, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
        <View style={styles.container}>
          <Header />       

          <View>
            
            
              <MealList />
            
              <RestaurantList />
            
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9CEAC',
    marginTop: 0,
  },
});

export default App;