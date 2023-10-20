import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import DragonBall from "./DragonBall";
import Home from "./Home";
import OnePiece from "./OnePiece";

const Tab = createBottomTabNavigator();

//https://static.enapter.com/rn/icons/material-community.html pegar os icone e colocar so o nome
// em "name"

export default function Rotastab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

    <Tab.Screen 
    name="DragonBall" 
    component={DragonBall} 
    options = {{tabBarIcon:({color,size})=><MaterialCommunityIcons 
    name="arrow-left" color={color} size={size} /> 
    }}/>
    <Tab.Screen name="Home" component={Home}
    options = {{tabBarIcon:({color,size})=><MaterialCommunityIcons 
    name="circle" color={color} size={size} /> 
    }}/>

    <Tab.Screen name="OnePiece" component={OnePiece} 
    options = {{tabBarIcon:({color,size})=><MaterialCommunityIcons 
    name="arrow-right" color={color} size={size} /> 
    }}/>

    </Tab.Navigator>
  );
}