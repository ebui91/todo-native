import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      input: '',
      tasks: [],
      completed: []
    }
  }

  removeItem(index) {
    this.setState((prevState)=> ({
      tasks: prevState.tasks.filter((_, i)=> i !== index)
    }));
  }

  renderTasks(){
    const todo= this.state.tasks.map((task, i)=> {
      return (
          <View key={ i } style={ styles.listCard }>
            <Text style= { styles.listItem }>{ task }</Text>
            <Button
              color= '#B4D455'
              title= 'DONE'
              onPress= { ()=> {
                  this.removeItem(i);
                }
              }
            />
          </View>
        )
      });


    if(this.state.tasks.length>0){
      return todo;
    }else{
      return <Text style= { styles.listItem }>All tasks completed!</Text>
    }
  }

  render() {
    return (
      <View style= { styles.mainContainer }>
        <View style= { styles.headerContainer }>
          <Text style={ styles.header }>To Do Native</Text>
          <View style={ styles.lineStyle }></View>
        </View>

        <View style= {{ flex: 1, flexDirection: 'row' }}>
          <TextInput
            style= { styles.inputBox }
            placeholder= 'Type text here...'
            onChangeText= { userText=> {
                this.setState({ input: userText });
              }
            }
            value= { this.state.input }
          />

        <Button
          title= 'ADD TASK'
          color= '#B4D455'
          onPress= { ()=> {
              this.setState({ tasks: [...this.state.tasks, `${this.state.input}`], input: '' });
              // Alert.alert('Task added!');
            }
          }
        />
        </View>

        <View style={ styles.listContainer }>
          <Text style= { styles.header }>TASKS: </Text>
            { this.renderTasks() }
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111'
  },
  headerContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#B4D455'
  },
  inputBox: {
    height: 40,
    width: 225,
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#B4D455',
    borderColor: '#B4D455'
  },
  listContainer: {
    width: '100%',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  listCard: {
    width: '90%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#B4D455',
    margin: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem: {
    fontSize: 14,
    color: '#B4D455',
    margin: 10,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor: '#B4D455',
    margin: 5,
    width: 250
  }
});
