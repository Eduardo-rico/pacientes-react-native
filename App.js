/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <Text style={styles.parrafo}>Hola mundo!</Text>
    </>
  );
};

const styles = StyleSheet.create({
  parrafo: {
    textAlign: 'center',
    marginTop: 100,
  },
});

export default App;
