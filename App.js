import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QRCodeReaderScreen from './screens/QRCodeReaderScreen';

const Stack = createNativeStackNavigator();

function App({ navigation }) {
  const openGForm = () => {
    Linking.openURL('https://forms.gle/bcHUGRGTTTHhc5Eb8');
  };

  const openQRCodeReader = () => {
    navigation.navigate('QRCodeReader');
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo-perum-bulog.jpg')} style={styles.bottomImage} resizeMode="contain" />
      <TouchableOpacity style={styles.button} onPress={openGForm}>
        <Text style={styles.buttonText}>Open Google Form</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openQRCodeReader}>
        <Text style={styles.buttonText}>Open QR Code Reader</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="QRCodeReader" component={QRCodeReaderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  bottomImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});
