import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import StylePreferencesScreen from './screens/StylePreferencesScreen';
import SuggestionsScreen from './screens/SuggestionsScreen';
import ProfileSettingsScreen from './screens/SettingsScreen';
import { ProfileProvider } from './context/ProfileContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="StylePreferences" component={StylePreferencesScreen} />
          <Stack.Screen name="Suggestions" component={SuggestionsScreen} />
          <Stack.Screen name="ProfileSettings" component={ProfileSettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
};

export default App;
