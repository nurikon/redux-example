import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
let up = ''
let down = ''

class Component1 extends Component {

  render() {
    return (
    <View style={styles.view}>

        <View style={[styles.textContainer, {backgroundColor:up}]}>
            <Text style={{fontWeight:'bold', color: up==='black'? 'white':'black' }} >{up}</Text>
        </View>

        <View style={[styles.textContainer, {backgroundColor:down}]}>
            <Text style={{fontWeight:'bold', color:'black' }}> {down} </Text>
        </View>

    </View>
    );
  }
}



const mapStateToProps = (state)=> {
    switch (state.reducer.type) {
        case 'make_black_white':
            up= state.reducer.payload
            break;
        case 'make_orange_red':
            down = state.reducer.payload
            break;
        case 'initial':
            up= state.reducer.payload
            down = state.reducer.payload
            break;
    }
    return state.reducer
}

export default connect(mapStateToProps)(Component1);


const styles={
    textContainer:{
        justifyContent:'center',
        alignItems: 'center',
        width:100,
        height:50,
        borderRadius:5,
        borderWidth:1,
        borderColor:'black'
    },
    view:{
        flex:1,
        backgroundColor: 'gray', 
        justifyContent:'space-evenly', 
        alignItems:'center' 
    },
}
