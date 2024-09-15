// SuggestionsScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const suggestions = [
  { id: '1', name: 'Vestido Floral', description: 'Um vestido leve e florido.' },
  { id: '2', name: 'Camisa Jeans', description: 'Uma camisa clássica de jeans.' },
];

const SuggestionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sugestões de Moda:</Text>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SuggestionsScreen;
