import ItemList from '../Components/item-list.js'
import { Button,View, Text } from 'react-native'

const ProfileScreen = ({ navigation, route }) => {
    return <View>
        <Text>Inventaire {route.params.name} :</Text>
        <ItemList/>
        </View>;
};

export default ProfileScreen
