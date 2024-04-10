// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { gadgets } from '../db.json'; // Assuming your JSON data is stored in db.json

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={gadgets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.brand}</Text>
            <Text>${item.price}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('GadgetDetail', { gadget: item })}
            />
          </View>
        )}
      />
    </View>
  );
}
