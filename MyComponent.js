import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { incrementCounterAction, decrementCounterAction, multiplyCounterAction } from'./redux/Counter/counterAction';
class MyComponent extends Component {
   render() {
      return (
         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ marginVertical: 50 }}>
               <Text style = {{ fontSize: 25, fontWeight: 'bold' }}> Counter Value = {this.props.counter} </Text>
               <Text style = {{ fontSize: 25, fontWeight: 'bold' }}> Counter1 Value = {this.props.counter1} </Text>
            </View>
            <View style = {{ marginVertical: 5 }}>
               <Button title = "Increment +1" style = {{ marginVertical: 50 }} onPress={() => { this.props.increaseCounter(1) }} />
            </View>
            <View style = {{ marginVertical: 5 }}>
               <Button title = "Increment +5" style = {{ marginVertical: 50 }} onPress={() => { this.props.increaseCounter(5) }} />
            </View>
            <View style = {{ marginVertical: 50 }}>
               <Button title = "Decrement -1" onPress={() => { this.props.decreaseCounter() }} />
            </View>
            <View style = {{ marginVertical: 5 }}>
               <Button title = "Multiply *9" style = {{ marginVertical: 50 }} onPress={() => { this.props.multiplyCounter(9) }} />
            </View>
            <View style = {{ marginVertical: 5 }}>
               <Button title = "Multiply *4" onPress={() => { this.props.multiplyCounter(4) }} />
            </View>
         </View>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      counter: state.counter,
      counter1: state.counter1
   }
}
const mapDispatchToProps = (dispatch) => {
   return { 
      increaseCounter: (parameter) => {
         dispatch(incrementCounterAction(parameter))
      },
      decreaseCounter: () => { 
         dispatch(decrementCounterAction())
      },
      multiplyCounter: (parameter) => {
        dispatch(multiplyCounterAction(parameter))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent); 