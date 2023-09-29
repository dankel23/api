import { StyleSheet } from 'react-native';
import { VerPersonagem } from './src/components/VerPersonagem/index'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Personagem } from './src/components/Personagem/index'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={VerPersonagem} />
        <Stack.Screen name='Personagem' component={Personagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
