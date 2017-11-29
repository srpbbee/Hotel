// import React from 'react';
// import {
//    ListView, StyleSheet, Text, View ,ActivityIndicator, Image} from 'react-native';
// //const list = require('./res.json');
//
// export default class List extends React.Component {
//   constructor(props){
// 		super(props);
// 		this.state = {
// 			isLoading: true,
// 			cloneApp:[],
//
// 		}
// 	}
//
// 	componentDidMount() {
//         fetch("https://raw.githubusercontent.com/srpbbee/Hotel/master/hotel.json")
//             .then(res => res.json())
//             .then((out) => {
//                 console.log(out);
//                 console.log('bbee');
//                 var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
//                 this.setState({
//                isLoading: false,
//                cloneApp: ds.cloneWithRows(out.Search),
//
//               });
//         }).catch(err => console.error(err));
//
//     }
//
//   render(){
// 	 console.log("Getting Data");
// 	  if(this.state.isLoading){
// 		  return(
// 		  <View>
// 			<ActivityIndicator />
// 		  </View>
// 		  );
// 	  }
// 	console.log("Already Getting Data");
//
//     return(
// 	 <View style={styles.container}>
// 	 <Text>can run</Text>
//         <ListView
// 			      dataSource={this.state.cloneApp}
// 			      renderRow={(rowData)=>	{
// 				return(
//          <View style={styles.name}>
//           <Text>{rowData.Name}</Text>
//           <View>
//             <Image style={styles.img} source={{uri: rowData.image1}}/>
//           </View>
//
//          </View>
//
// 				);
// 			}
// 			}
// 		/>
//
//     </View>
//     );
//   }
// }
// //export default List;
// const styles = StyleSheet.create({
//   container: {
//      flex: 1,
//      marginTop:20,
//
//   },
//   img:{
//     width:150,
//     height:110
//   },
//   name: {
//     justifyContent: 'flex-end'
//   }
//
//
// });


import React from 'react';
import {
   ListView, StyleSheet, Text, View ,ActivityIndicator, Image} from 'react-native';
import API from './Api.js';

export default class List extends React.Component {
  constructor(props){
		super(props);
		this.state = {
      id:'1',
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
        detail2: data.Search[0].Detail[1],
        detail3: data.Search[0].Detail[2],
        img2: data.Search[0].image2,
        img3: data.Search[0].image3,
        img4: data.Search[0].image4
      });
    });
	}
  render(){
  console.log("Already Getting Data");

    return(
   <View style={styles.container}>
      <View>
        <View style={styles.text}>
          <View style={styles.img}>
          <Image style={styles.imgs} source={{uri: this.state.img2}}/>
          </View>
          <View style={styles.detail}>
          <Text>{this.state.detail1}</Text>
          </View>
        </View>

        <View style={styles.text}>
          <View style={styles.img}>
          <Image style={styles.imgs} source={{uri: this.state.img3}}/>
          </View>
          <View style={styles.detail}>
          <Text>{this.state.detail2}</Text>
          </View>
        </View>

        <View style={styles.text}>
          <View style={styles.img}>
          <Image style={styles.imgs} source={{uri: this.state.img4}}/>
          </View>
          <View style={styles.detail}>
          <Text>{this.state.detail3}</Text>
          </View>
        </View>


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
    flex: 1
  },
  imgs: {
     width:150,
     height:110
  }
  detail:{
    flex: 1
  },
  text: {
    flexDirection:'row',
    justifyContent: 'flex-end'
  }


});
