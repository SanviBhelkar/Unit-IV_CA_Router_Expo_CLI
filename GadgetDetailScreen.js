// screens/GadgetDetailScreen.js

import React from 'react';
import { View, Text } from 'react-native';

export default function GadgetDetailScreen({ route }) {
  const { gadget } = route.params;
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{gadget.name}</Text>
      <Text>{gadget.brand}</Text>
      <Text>${gadget.price}</Text>
    </View>
  );
}
