import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Sample gadget data (replace this with your actual data or fetch it from somewhere)
const gadgets = [
  { id: 1, name: 'Smartphone', brand: 'Samsung', price: 999 },
  { id: 2, name: 'Laptop', brand: 'Apple', price: 1499 },
  { id: 3, name: 'Smartwatch', brand: 'Fitbit', price: 199 }
];

const GadgetList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('GadgetDetail', { gadget: item })}
      style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
    >
      <Text>{item.name}</Text>
      <Text>{item.brand}</Text>
      <Text>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={gadgets}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

// Stack Navigator setup
const Stack = createStackNavigator();

const GadgetStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="GadgetList" component={GadgetList} options={{ title: 'Gadget List' }} />
    {/* Add GadgetDetail screen here */}
  </Stack.Navigator>
);

export default GadgetStack;
