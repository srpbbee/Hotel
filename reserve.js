import React from 'react';
import DatePicker from 'react-native-datepicker'

import { Alert,TouchableOpacity,Button,Image,StyleSheet, Text, View } from 'react-native';
//var alertMessage = 'Total amount that you should pay';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = ({price:0})
    this.state = {dateS:"2017-05-15"}
    this.state = {amount: 0, i: 0, night: 0}
    this.plusd = this.plusd.bind(this);
    this.minusd = this.minusd.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }
  static navigationOptions = {
		title: 'reservation',

	};
  componentDidMount(){
    var {params} = this.props.navigation.state;
    var p = params.Price;
    console.log('bbbbbbeeeeee');
	  console.log(p);
    this.setState({price: p});
    console.log(this.state.price);
  }

  plusd(){
    this.setState({night : this.state.night+1});
  }
  minusd(){
	   var check = this.state.night;
	if(check<=0){
		this.setState({night: 0});
	}
	else {
		this.setState({night : this.state.night-1});
	}
  }
  plus(){
    this.setState({amount : this.state.amount+1});
  }
  minus(){
	   var check = this.state.amount;
	if(check<=0){
		this.setState({amount: 0});
	}
	else {
		this.setState({amount : this.state.amount-1});
	}
  }
  render() {
    let i =0;
    return (
        <Image
          source={require('./images/mobile.jpg')}
          style={styles.container}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={{fontSize: 20}}> Start Date </Text>
            <DatePicker
              style={{width: 300}}
              date={this.state.dateS}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2017-01-01"
              maxDate="2020-01-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.setState({dateS: date})}}
            />
            <Text style={{fontSize: 20}}>Number Of Night? </Text>
            <View style={styles.subpeo}>
                <View>
                  <Text style={styles.pp}>{this.state.night} NIGHT </Text>
                </View>
              <TouchableOpacity style={styles.pm2}  onPress={this.plusd}>
              <Text style={styles.tb}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pm}  onPress={this.minusd}>
              <Text style={styles.tb}>-</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 20}}>Number Of Guess ? </Text>
            <View style={styles.subpeo}>
                <View>
                  <Text style={styles.pp}>{this.state.amount} PEOPLE </Text>
                </View>
              <TouchableOpacity style={styles.pm2}  onPress={this.plus}>
              <Text style={styles.tb}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pm}  onPress={this.minus}>
              <Text style={styles.tb}>-</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Information',
            'Check-in Date: '+this.state.dateS+'             '+
            'Total guess: '+this.state.amount+'      '+'Total night: '+this.state.night+'           '+
            'Total amount that you should pay : '+ this.state.price*this.state.night,
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ])}>
              <Text style={{fontSize: 18}}>Reserve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: undefined,
	height: undefined,
	backgroundColor:'transparent',

 },
  button: {
    marginTop:50,
    backgroundColor: 'lightblue',
    padding: 15,
    borderWidth: 2,
    borderRadius:10,
  },
  subpeo:{
    borderColor:'#9fa8a7',
    marginLeft:40,
    width: 260,
    borderWidth:1,
    height:50,
    margin:5,
    flexDirection:'row',
  },
  pm:{
    borderWidth:3,
    height:30,
    width:30,
    borderRadius:30/2,
    marginLeft:20,
    marginTop:10,
    borderColor:'red',
  },
  pm2:{
    borderWidth:3,
    height:30,
    width:30,
    borderRadius:30/2,
    marginTop:10,
    borderColor:'red',
  },
  tb:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
  },
  pp:{
    margin:8,
    fontSize:16,
    fontWeight:'bold',
    paddingLeft:50,
  }
});
