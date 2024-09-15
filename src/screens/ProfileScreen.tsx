import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useProfile } from '../context/ProfileContext';

const ProfileScreen = ({ navigation }: any) => {
  const { name, email } = useProfile();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Button
        title="Editar Perfil"
        onPress={() => navigation.navigate('ProfileSettings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
});

export default ProfileScreen;
