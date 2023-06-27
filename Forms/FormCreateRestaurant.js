import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const FormDataExample = () => {
  const [restaurantId, setRestaurantId] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [location1, setLocation1] = useState('');
  const [branchName1, setBranchName1] = useState('');
  const [location2, setLocation2] = useState('');
  const [branchName2, setBranchName2] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [score, setScore] = useState('');
  const [products, setProducts] = useState('');
  const [date, setDate] = useState('');

  const sendFormData = async () => {
    const formData = {
      idRestaurant: restaurantId,
      name: restaurantName,
      location: [
        {
          location: location1,
          branchName: branchName1,
          imagesFacilities: [
            'https://img.lovepik.com/photo/50110/2849.jpg_wh860.jpg',
            'https://img.lovepik.com/photo/50110/2849.jpg_wh860.jpg',
          ],
          hoursAttention: '9:00 AM - 10:00 PM',
        },
        {
          location: location2,
          branchName: branchName2,
          imagesFacilities: [
            'https://img.lovepik.com/photo/50110/2849.jpg_wh860.jpg',
            'https://img.lovepik.com/photo/50110/2849.jpg_wh860.jpg',
          ],
          hoursAttention: '8:00 AM - 9:00 PM',
        },
      ],
      priceRange: priceRange,
      puntuacion: { $numberDouble: score },
      productos: products.split(','),
      date: date,
    };

    try {
      const response = await fetch('http://example.com/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Restaurant ID"
        value={restaurantId}
        onChangeText={text => setRestaurantId(text)}
      />
      <TextInput
        placeholder="Restaurant Name"
        value={restaurantName}
        onChangeText={text => setRestaurantName(text)}
      />
      <TextInput
        placeholder="Location 1"
        value={location1}
        onChangeText={text => setLocation1(text)}
      />
      <TextInput
        placeholder="Branch Name 1"
        value={branchName1}
        onChangeText={text => setBranchName1(text)}
      />
      <TextInput
        placeholder="Location 2"
        value={location2}
        onChangeText={text => setLocation2(text)}
      />
      <TextInput
        placeholder="Branch Name 2"
        value={branchName2}
        onChangeText={text => setBranchName2(text)}
      />
      <TextInput
        placeholder="Price Range"
        value={priceRange}
        onChangeText={text => setPriceRange(text)}
      />
      <TextInput
        placeholder="Score"
        value={score}
        onChangeText={text => setScore(text)}
      />
      <TextInput
        placeholder="Products (comma-separated)"
        value={products}
        onChangeText={text => setProducts(text)}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={text => setDate(text)}
      />
      <Button title="Submit" onPress={sendFormData} />
    </View>
  );
};

export default FormDataExample;
