
import React, { type PropsWithChildren } from 'react';
import {
  Button,
  StyleSheet, Text, TextInput, View,
} from 'react-native';

const App = () => {

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Enter course goal'/>
      <Button title='Add Goal'/>
     </View>
     <View>
      <Text>List of Goals</Text>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
  },
  inputContainer:{
    flexDirection: 'row',
    marginRight: 10,
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
  },
});

export default App;
