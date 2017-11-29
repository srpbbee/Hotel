import React from 'react';
import {
   ListView, StyleSheet, Text, View ,ActivityIndicator, Image, TouchableOpacity,TextInput} from 'react-native';


export default class List extends React.Component {
  constructor(props){
  super(props);
  this.state = {
   isLoading: true,
   cloneApp:[],
   s:'',
   fill:'',
      id:'0'

  }
  this.link = this.link.bind(this);
  this.search = this.search.bind(this);
}''

 static navigationOptions = {
  title: 'list',

 };
 componentDidMount() {
        fetch("https://raw.githubusercontent.com/srpbbee/Hotel/master/hotel.json")
            .then(res => res.json())
            .then((out) => {
                console.log(out);
                console.log('bbee');
                var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
                this.setState({
               isLoading: false,
               cloneApp: ds.cloneWithRows(out.Search),
    fill: out.Search
              });
        }).catch(err => console.error(err));

    }
 link(d){
 //console.log();
  var {navigate} = this.props.navigation;
  navigate("Second",{id:d})

 }
 search(s){
  var data = this.state.fill;
  const newData = data.filter(function(item){
   const itemData = item.Name.toUpperCase()
   const textData = s.toUpperCase()
   return itemData.indexOf(textData) >-1
  })
  this.setState({
   cloneApp: this.state.cloneApp.cloneWithRows(newData),
   s: s
  })
 }


  render(){
  console.log("Getting Data");
   if(this.state.isLoading){
    return(
    <View>
   <ActivityIndicator />
    </View>
    );
   }
 console.log("Already Getting Data");

    return(
  <Image
      source={require('./images/fetch.jpg')}
      style={styles.pic}>

      <View style={styles.container}>
        <Text>Insert the hotel name here.</Text>

        <View style={styles.search}>
            <TextInput  keyboardType='ascii-capable' value={this.state.s}
              placeholder='Search' onChangeText={(s)=> this.search(s)}/>
        </View>

        <ListView
          dataSource={this.state.cloneApp}
          renderRow={(rowData)=> {
              var i= rowData.id;
			           console.log(i);
              return(
                <View style={styles.text}>

                  <View style={styles.image}>
                  <TouchableOpacity  onPress={this.link.bind(this,i)}>
                    <Image style={styles.img} source={{uri: rowData.image1}}/>
                  </TouchableOpacity>
                  </View>

                  <View style={styles.detail}>
                  <Text>{rowData.Name}</Text>
                  </View>

                </View>

              );
            }
          }
          />

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
      width:150,
      height:110,
  },
  image:{
    flex:1,
  },
  detail:{
    flex:1,
  },
  text:{
    flexDirection:'row',
    justifyContent: 'flex-end'
  },
  pic:{
	   flex:1,
     justifyContent: 'center',
     width: undefined,
	   height: undefined,
	   backgroundColor:'transparent',

  },
  search: {
    width:250,
    height:40,

  }

});
