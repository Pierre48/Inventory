import ItemList from '../Components/item-list.js'
import { Button,View, Text } from 'react-native'

const ProfileScreen = ({ navigation, route }) => {
    return <View>
        <Text>Inventaire {route.params.id} :</Text>
        <ItemList id={route.params.id} navigation={navigation} />
        </View>;
};

export default ProfileScreen
