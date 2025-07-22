import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to Little Lemon Newsletter!</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Subscribe')}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 200, height: 200, marginBottom: 20 },
  text: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
  button: {
    backgroundColor: '#495E57',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: { color: 'white', fontSize: 16 },
});

export default WelcomeScreen;
