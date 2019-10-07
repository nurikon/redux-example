import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions'


class Component3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.view}>

        <TouchableOpacity 
          onPress={()=> this.props.makeOrangeRed('orange')} 
          style={[styles.touch, {backgroundColor:'orange'}]}
          >
            <Text> orange </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=> this.props.makeOrangeRed('red')}  
          style={[styles.touch, {backgroundColor:'red'}]}
          >
            <Text> red </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}


export default connect(null, actions)(Component3);

const styles={
    view:{flex:1,
      flexDirection: 'row',
      borderTopWidth: 3,
      borderTopColor: '#353635',
      backgroundColor: 'gray', 
      justifyContent:'space-evenly', 
      alignItems:'center' 
    },
    touch: {width:100, 
        height:50, 
        backgroundColor: 'orange', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5
    }
}


