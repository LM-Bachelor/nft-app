import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'native-base';

import HomeScreen from '../screen/HomeScreen';
import NFTScreen from '../screen/NFTScreen';

import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Explore NFTs',
          headerStyle: {
            backgroundColor: theme.colors.violet['900'],
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '700',
          },
        }}
      />
      <Stack.Screen
        name="NFTDetail"
        component={NFTScreen}
        options={{
          headerTransparent: true,
          title: '',
          header: ({ back, navigation }) =>
            back ? (
              <Ionicons
                name="md-arrow-back-circle"
                size={32}
                color="white"
                onPress={navigation.goBack}
                style={{
                  top: 46,
                  left: 20,
                }}
              />
            ) : null,
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
