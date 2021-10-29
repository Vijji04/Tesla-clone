import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Caritem from './components/Caritem';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Lets GOO!! 🔥 </Text> */}
      <Caritem />
      <StatusBar style="auto" />
    </View>
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
