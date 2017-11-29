import React from 'react';
import {
   ListView, StyleSheet, Text, View ,ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import API from './Api.js';

export default class detail extends React.Component {
  constructor(props){
  super(props);
  this.state = {
      iden:'0',
      img2:'',
      img3:'',
      img4:'',
      detail1:'',
      detail2:'',
      detail3:'',
      opt:''

  };
    API().then((data) => {
      this.setState({detail1: data.Search[this.state.id].Detail[0],
        detail2: data.Search[this.state.id].Detail[1],
        detail3: data.Search[this.state.id].Detail[2],
        img2: data.Search[this.state.id].image2,
        img3: data.Search[this.state.id].image3,
        img4: data.Search[this.state.id].image4
      });

    })
	 .catch((error)=>{});

   this.link = this.link.bind(this);
 }

 static navigationOptions = {
  title: 'Detail',

 };

 link(d){
 //console.log();
  var {navigate} = this.props.navigation;
  navigate("Third", {id:d})

 }


  componentDidMount(){
    var {params} = this.props.navigation.state;
    var d = params.id-1;
    console.log(d);
    this.setState({id:d});

    }


  render(){
    console.log("Already Getting Data");
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;

    return(
  <Image
      source={require('./images/list.jpg')}
      style={styles.pic}>
   <View style={styles.container}>
      <View>
        <View style={styles.text}>
          <View style={styles.img}>
            <TouchableOpacity  onPress={ () => navigate('Third',{Price:7000})}>
              <Image style={styles.imgs} source={{uri: this.state.img2}}/>
            </TouchableOpacity>

          </View>
          <View style={styles.detail}>
          <Text>{this.state.detail1}</Text>
          </View>
        </View>


        <View style={styles.text}>
          <View style={styles.img}>
          <TouchableOpacity  onPress={ () => navigate('Third',{Price:4500})}>
            <Image style={styles.imgs} source={{uri: this.state.img3}}/>
          </TouchableOpacity>
          </View>
          <View style={styles.detail}>
          <Text>{this.state.detail2}</Text>
          </View>
        </View>

        <View style={styles.text}>
          <View style={styles.img}>
          <TouchableOpacity  onPress={ () => navigate('Third',{Price:3000})}>
            <Image style={styles.imgs} source={{uri: this.state.img4}}/>
          </TouchableOpacity>
          </View>
          <View style={styles.detail}>
          <Text>{this.state.detail3}</Text>
          </View>
        </View>


      </View>

    </View>
    </Image>
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
    flex: 1
  },
  imgs: {
     width:150,
     height:110
  },
  detail:{
    flex: 1
  },
  text: {
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  pic:{
  	   flex:1,
       justifyContent: 'center',
       width: undefined,
  	   height: undefined,
  	   backgroundColor:'transparent',

    }


});
