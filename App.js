import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import NavigationStack from './src/navigation/NavigationStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar style="light" translucent  />
        <NavigationStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}