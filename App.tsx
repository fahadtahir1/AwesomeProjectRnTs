
import React, { type PropsWithChildren } from 'react';
import {
  Button,
  StyleSheet, Text, TextInput, View,
} from 'react-native';



const App = () => {
  function goalInputHandler(enteredText: String){
    console.log(enteredText)
  };

  function addGoalHandler(){

  };

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Enter course goal'/>
      <Button title='Add Goal'/>
     </View>
     <View style={styles.goalsContainer}>
      <Text>List of Goals</Text>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 8,
  },
  inputContainer:{
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
  },
  goalsContainer:{
    flex: 7,
  },
});

export default App;
