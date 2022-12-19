import {useContext} from 'react'
import { View, Text} from "react-native";
import { AuthContext } from "../../contexts/AuthContext";


export default function Dashboard(){

    const { signOut} = useContext(AuthContext);

    return (
        <View>
            <Text>Tela Dashboard</Text>
        </View>
    )
}