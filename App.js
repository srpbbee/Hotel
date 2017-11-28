import React from 'react';
import {
   ListView, StyleSheet, Text, View ,ActivityIndicator, Image} from 'react-native';
//const list = require('./res.json');

export default class List extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			isLoading: true,
			cloneApp:[],

		}
	}

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

              });
        }).catch(err => console.error(err));

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
	 <View style={styles.container}>
	 <Text>can run</Text>
        <ListView
			      dataSource={this.state.cloneApp}
			      renderRow={(rowData)=>	{
				return(
         <View>

          <Text>{rowData.Name}</Text>
          <View>
            <Image style={styles.img} source={{uri: rowData.image1}}/>
          </View>

         </View>

				);
			}
			}
		/>

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
  height:110,

 }

});
