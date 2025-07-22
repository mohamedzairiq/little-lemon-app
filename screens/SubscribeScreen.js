import * as React from 'react';
import { View, Text, Image, TextInput, Pressable, Alert, StyleSheet } from 'react-native';
import { ValidateEmail } from '../utils';

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    Alert.alert('Subscribed', `Thanks for subscribing, ${email}!`);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Subscribe to our newsletter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Pressable
        style={[
          styles.button,
          { backgroundColor: ValidateEmail(email) ? '#495E57' : 'gray' }
        ]}
        onPress={handleSubscribe}
        disabled={!ValidateEmail(email)}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 200, height: 200, marginBottom: 20 },
  text: { fontSize: 18, marginBottom: 20 },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: { color: 'white', fontSize: 16 },
});

export default SubscribeScreen;
