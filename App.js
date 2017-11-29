import React from 'react';


import { Alert,TouchableOpacity,Button,Image,StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

import list from './list.js';
import detail from './detail.js';
import reserve from './reserve.js';

const Navigation = StackNavigator({
		First:{screen: list},
		Second:{screen: detail},
    Third:{screen: reserve},

});
export default Navigation;
