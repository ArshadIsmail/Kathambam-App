/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React ,{useEffect ,useState} from 'react';
 import {
   Text,
   View,
 } from 'react-native';

 import firestore from '@react-native-firebase/firestore';

 import HomeScreen from './screens/HomeScreen';
 import MainScreen from './screens/MainScreen';
 import StoryViewScreen from "./screens/StoryViewScreen";
 import StorySecondView from './screens/StorySecondView';
 import StoryThirdView from './screens/StoryThirdView';
 import VersionScreen from './screens/VersionScreen';
 

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 const Stack = createNativeStackNavigator();
 
 
 export default function App() {

  const [version, setVersion] = useState(true);
  var currentVersion = 1;


  useEffect(() => {


  console.log('app use effect');

  const versionCollection = firestore().collection('versioncontrolling')
   .onSnapshot((docs) =>{
       // let storys =[];
      docs.forEach((doc)=>{
        var supported_minimum_version =doc.data().supported_minimum_version;
        setVersion(supported_minimum_version < currentVersion);
        
      // storys.push({
      //  id: doc.id,
      //  name: doc.data().title,
      //  description:doc.data().description,
      //  author:doc.data().author,
      //  //id: "1",
      // // name:"qwerty" ,
      //  status:doc.data().author,
      //  image:"https://bootdey.com/img/Content/avatar/avatar7.png",
      //  })
       //setStorys(storys);
       console.log(version);
    })

  })   
      
}, []);




   return (
     <NavigationContainer>
     <Stack.Navigator>
        {/* <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{ title: 'Welcome' }}
       />  */}
       {version ? (
        <Stack.Screen
         name="Main"
         component={MainScreen}
         options={{ title: 'Story Lists' ,
         headerShown: true,
         headerStyle: {
              //backgroundColor: '#EEEEEE',
            },
            //headerTintColor: '#fff',
            headerTitleStyle: {
              //fontFamily:'sans-serif',
             //fontWeight: 'bold',
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
              //backgroundColor: '#EEEEEE',
            },
            //headerTintColor: '#fff',
            headerTitleStyle: {
              //fontFamily:'sans-serif',
             //fontWeight: 'bold',
            },
         }}
       />
      )}


       
       <Stack.Screen
         name="StoryView"
         component={StoryViewScreen}
         options={{ title: '',
         headerShown: true,
          headerStyle: {
              //backgroundColor: '#EEEEEE',
            },
            //headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
         
          }}
       />
 
      <Stack.Screen
         name="StorySecondView"
         component={StorySecondView}
         options={{ title: ' ' ,
         headerShown: true,
         headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            //headerTintColor: '#fff',
            headerTitleStyle: {
              //fontFamily:'sans-serif',
             //fontWeight: 'bold',
            },
         }}
       />
 
         <Stack.Screen
         name="StoryThirdView"
         component={StoryThirdView}
         options={{ title: ' Third' ,
         headerShown: false,
         headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            //headerTintColor: '#fff',
            headerTitleStyle: {
              //fontFamily:'sans-serif',
             //fontWeight: 'bold',
            },
         }}
       />
 
     </Stack.Navigator>
   </NavigationContainer>
   );
 }
 
 //STEPS
 /*
 1.Naviagtions setup and laoding basic page.
 2.redux set up
 3.firebase
 4.list view
 5.view story page.
 
 NOTE:
 Try to clone  a working project and do from there ,
 like you doing in larvel,
 
 6,login
 7.signup
 8.profile etc...
 
 */