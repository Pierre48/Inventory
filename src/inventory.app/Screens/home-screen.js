import {Button,View } from 'react-native'
import StockList from '../Components/stock-list.js'

const HomeScreen = ({ navigation }) => {
    return (
        <View >
        <StockList navigation={navigation}/>
        </View>
    );
  };

export default HomeScreen
