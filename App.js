/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React ,{useEffect ,useState} from 'react';


 import firestore from '@react-native-firebase/firestore';

 import MainScreen from './screens/MainScreen';

 import StoryThirdView from './screens/StoryThirdView';
 import VersionScreen from './screens/VersionScreen';
 

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 const Stack = createNativeStackNavigator();
 
 
 export default function App() {

  const [version, setVersion] = useState(true);
  var currentVersion = -1;
  


  useEffect(() => {

  const versionCollection = firestore().collection('versioncontrolling')
   .onSnapshot((docs) =>{

    docs.forEach((doc)=>{
        var supported_minimum_version =doc.data().supported_minimum_version;
        setVersion(supported_minimum_version < currentVersion);
            
    })

  })   
      
}, []);




   return (
     <NavigationContainer>
     <Stack.Navigator>
     
       {version ? (
        <Stack.Screen
         name="Main"
         component={MainScreen}
         options={{ title: 'Story Lists' ,
         headerShown: true,
         headerStyle: {
            },
            headerTitleStyle: {
            },
         }}
       />
      ) : (
        <Stack.Screen
         name="Version"
         component={VersionScreen}
         options={{ title: 'Version Update' ,
         headerShown: true,
         headerStyle: {
            },
            headerTitleStyle: {
            },
         }}
       />
      )}
 
         <Stack.Screen
         name="StoryThirdView"
         component={StoryThirdView}
         options={{ title: ' Third' ,
         headerShown: false,
         headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTitleStyle: {
            },
         }}
       />
 
     </Stack.Navigator>
   </NavigationContainer>
   );
 }
 
 