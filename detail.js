import React from 'react';
import {
   ListView, StyleSheet, Text, View ,ActivityIndicator, Image} from 'react-native';
import API from './Api.js';

export default class List extends React.Component {
  constructor(props){
		super(props);
		this.state = {
      id:0,
      img2:'',
      img3:'',
      img4:'',
      detail1:'',
      detail2:'',
      detail3:'',
      opt:''

		};
    API().then((data) => {
      this.setState({detail1: data.Search[0].Detail[0],
        detail2: data.Search[0].Deatail[1]
      });
    });
	}
  render(){
  console.log("Already Getting Data");

    return(
   <View style={styles.container}>
      <View>
        <Text>{this.state.detail1}</Text>
      </View>

    </View>
    );
  }
}
//export default List;
const styles = StyleSheet.create({
  container: {
     flex: 1,
     marginTop:20,

  },
  img:{
    width:150,
    height:110
  },
  name: {
    justifyContent: 'flex-end'
  }


});

}
