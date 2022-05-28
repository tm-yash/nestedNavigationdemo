// import React from 'react';
// import {Text, TouchableOpacity} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';

// function Feed({navigation}) {
//   return (
//     <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
//       <Text>Feed</Text>
//     </TouchableOpacity>
//   );
// }

// function Messages() {
//   return <Text>Messages</Text>;
// }
// function Abc() {
//     return <Text>Abc</Text>;
//   }
  
//   function abc() {
//     return <Text>abc</Text>;
//   }

// function Settings({navigation}) {
//   return   ( <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
//   <Text>hbtGF</Text>
// </TouchableOpacity>
//   )}
// const Tab = createBottomTabNavigator();
// function Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//       <Tab.Screen name="Abc" component={Abc} />
//       <Tab.Screen name="abc" component={abc} />
//     </Tab.Navigator>
//   );
// }

// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../nastadnavigationdemo/Src/Screen/Home"
import Profile from './Src/Screen/Profile';
import Setting from './Src/Screen/Setting';
import Search from './Src/Screen/Search';

const App =()=>{
   return(
     <>
        <Home/>
        {/* <Profile/>
        <Search/>
        <Setting/> */}
     </>
   )
}

export default App;