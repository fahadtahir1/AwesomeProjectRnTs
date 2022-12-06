
import React, { type PropsWithChildren } from 'react';
import {
  Button,
  StyleSheet, Text, TextInput, View,
} from 'react-native';

const App = () => {

  return (
   <View>
    <View>
      <TextInput placeholder='Your course goal'/>
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
});

export default App;
