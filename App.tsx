
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
    paddingTop: 50,
    paddingHorizontal: 8,
  },
  inputContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
  },
});

export default App;
