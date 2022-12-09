import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet, Text, TextInput, View, FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setcourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler() {
    // console.log(enteredGoalText);
    setcourseGoals((currentCourseGoals) =>
      [...currentCourseGoals, { text: enteredGoalText, id: Math.random() }
      ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='Enter course goal'
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text}/>
            );
          }}
          keyExtractor={(item, index) => {return item.key}}
          alwaysBounceVertical={false}
         />
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
  inputContainer: {
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
  goalsContainer: {
    flex: 7,
  },
 
});

export default App;
