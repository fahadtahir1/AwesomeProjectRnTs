
import React, { type PropsWithChildren } from 'react';
import {
  Button,
  StyleSheet, Text, TextInput, View,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.appContainer}>
      <View
        style={{
          backgroundColor: 'red',
      
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
  
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
      
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    flexDirection: 'row',
    width: '80%',
    height: 300,
  },
});

export default App;
