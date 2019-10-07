import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions'




class Component2 extends Component {

  render() {
    return (
      <View style={styles.view}>

        <TouchableOpacity 
          onPress={()=> this.props.makeBlackWhite('black')}  
          style={[styles.touch, {backgroundColor:'black'}]}
          >
            <Text style={{color:'white'}}> black </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=> this.props.makeBlackWhite('white')}  
          style={[styles.touch, {backgroundColor: 'white'}]}
          >
          <Text> white </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}


export default connect(null, actions)(Component2)

const styles={
    view:{flex:1,
        flexDirection: 'row',
        borderTopWidth: 3,
        borderTopColor: '#353635',
        backgroundColor: 'gray', 
        justifyContent:'space-evenly', 
        alignItems:'center' 
    },
    touch: {
        width:100, 
        height:50,
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5
    }
}
