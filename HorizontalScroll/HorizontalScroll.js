import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

const HorizontalScrollView = () => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Centra los elementos horizontalmente
    paddingVertical: 20,
  },
  item: {
    width: 150,
    height: 150,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default HorizontalScrollView;