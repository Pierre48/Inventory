import {Text,View } from 'react-native'

const ItemScreen = ({ navigation,route }) => {
    return (
        <View>
            <Text>{route.params.item.barcode}</Text>
            <Text>{route.params.item.productBrand}</Text>
            <Text>{route.params.item.useByDate}</Text>
        </View>
    );
  };

export default ItemScreen
