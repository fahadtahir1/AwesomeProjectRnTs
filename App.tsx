
import React, { type PropsWithChildren } from 'react';
import {
  Button,
  StyleSheet, Text, TextInput, View,
} from 'react-native';

const App = () => {

  return (
   <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your course goal'/>
      <Button title='Add Goal'/>
    </View>
    <View>
      <Text>List of Goals!</Text>
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    borderRadius: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
  },
});

export default App;
