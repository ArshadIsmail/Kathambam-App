import React, { Component,useEffect, useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
//import { createIconSet } from 'react-native-vector-icons';


// function onResult(QuerySnapshot) {
//   console.log('Got Users collection result.');
// }

// function onError(error) {
//   console.error(error);
//}



const MainScreen = ({navigation})=>{



    const [storys, setStorys] = useState([]);

    const [screenNo, setScreenNo] = useState(true);

    const [screenNoTwo, setscreenNoTwo] = useState(false);



   // let screenno = 2;

  //   const [storys, setStorys] = useState([
  //   {id:1,  name: "Storyfgdff of my life",status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
  //   {id:2,  name: "Monk Who sold his ferrari",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
  //   {id:3,  name: "Welcome to Boor",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
  //   {id:4,  name: "Tree of my life",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
  //   {id:5,  name: "Wings of fire",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
  //   {id:6,  name: "Adarjan kadukal", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
  //   {id:8,  name: "En walkai,En karthika", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
  //   {id:9,  name: "Atu or kana kalam",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
  //   {id:10, name: "Fermod Doe",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
  // ])

 

    useEffect(() => {


      navigation.setOptions({
        headerRight: () => (
         <View style={{flexDirection:'row'}}>            
          <TouchableOpacity
          onPress={()=>{
            alert('Profile');
          }}
          >
          <Image
          
          // onPress={() => setCount(c => c + 1)} 
          //title="Update count" 
          source={{uri:'https://img.icons8.com/external-neu-royyan-wijaya/452/external-people-neu-users-neu-royyan-wijaya-2.png'}}
          style={{width:25,height:25,marginLeft:25,}}
          /> 
          </TouchableOpacity>  
          </View>      
        ),
      });





    const usersCollection = firestore().collection('storycollection')
    .onSnapshot((docs) =>{
         let storys =[];
        docs.forEach((doc)=>{
          
        storys.push({
         id: doc.id,
         name: doc.data().title,
         description:doc.data().description,
         author:doc.data().author,
         //id: "1",
        // name:"qwerty" ,
         status:doc.data().author,
         image:"https://bootdey.com/img/Content/avatar/avatar7.png",
         })
         setStorys(storys);
         console.log(storys);
      })

    })   
        
	}, []);





      renderItem = ({item}) => {
        return (
  
          <TouchableOpacity  
           onPress={() => {
          /* 1. Navigate to the Details route with params */
            navigation.navigate('StoryThirdView', {
                itemId: item.id,
                storyDescription:item.description,
                name:item.name,
                author:item.author,
                otherParam: 'anything you want here',                
              });           
             }}

            style={{
             // backgroundColor:'#fff',
            }}
             
          >
            <View style={styles.row}>
            <Image source={{uri:'data:image/png;base64,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'}}
             style={{width:100,height:120,borderRadius:10,}}/>
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
                  <TouchableOpacity
                      onPress={()=>{
                        alert('Bookmark');
                      }}>
                  <Image
                    style={styles.mblTxt}
                    source={{uri:'https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png'}}
                  />
                  </TouchableOpacity>
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgTxt}>{item.status}</Text>
                </View>
                <View style={styles.middleContainer}>
                  <Image
                    style={{width:13,height:13,
                    marginLeft:15,
                    marginTop:10,
                      }}
                    source={{uri:'https://cdn-icons-png.flaticon.com/512/709/709612.png'}}
                  />
                  <Text style={styles.countText}> - </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop:8 ,marginLeft:10,}}>
                    {/* <View style={{ justifyContent: 'center', alignItems: 'center',
                        padding: 8,
                        marginRight:8,
                       backgroundColor:'#EFEFF0',
                        height: 30,
                         borderRadius: 12}}>
                       <Text style={{ color: '#424BAF',fontSize:10, }}>Adventure</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center',
                        padding: 8,
                        marginRight:8,
                       backgroundColor:'#EFEFF0',
                       height: 30,
                         borderRadius: 12}}>
                       <Text style={{ color: '#424BAF',fontSize:10}}>Horror</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center',
                        padding: 8,
                        marginRight:8,
                       backgroundColor:'#EFEFF0',
                       height: 30,
                         borderRadius: 12}}>
                       <Text style={{ color: '#424BAF',fontSize:10 }}>Family</Text>
                    </View> */}
                  </View>
                  
               
              </View>
            </View>
          </TouchableOpacity>
        );
      }


      return (
        <View style={{
           flex: 1,
           backgroundColor:'#fff',         
            }} >
            
            
        <FlatList 
          data={storys}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={renderItem}/>
      </View>
	);

};


export default MainScreen;

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      //borderColor: '#DCDCDC',
      backgroundColor:'#fffF',
      //borderBottomWidth:1,
      padding:0,
      borderRadius:15,
      marginTop:15,
      marginLeft:15,
      marginRight:15,
      //elevation:1,
      //width:100,
      //height:0,
    },
    pic: {
      //borderRadius:30,
     // width: 60,
     // height: 60,
    },
    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 280,
     // marginTop:1,

    },
    nameTxt: {
      marginLeft:15,
      fontWeight: '600',
      color: '#222',
      fontSize: 14,
      width:200,
     // fontFamily: "Coiny",

    },
    mblTxt: {
      fontWeight: '200',
      color: '#777',
      //fontSize:10,
      width:22,
      height:22,
      //paddingLeft:100
      color:'black',
      marginTop:5,
    },
    msgContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    msgTxt: {
      fontWeight: '400',
      color: '#008B8B',
      fontSize: 10,
      marginLeft:15,
    },
    middleContainer:{
      flexDirection: 'row',
    },
    middletxt:{

    },
    countText:{
      //width:15,
      //height:15,
      fontSize: 11, 
      marginLeft:1,
       marginTop:7,
    },contentSize:{ 
      justifyContent:'center', 
      marginHorizontal:30, 
      flexDirection:'row', 
      marginTop:20,
      marginBottom:20,
    },
    btnSize: {
      height:40,
      width:150,
      borderRadius:5,
      borderColor:'#778899',
      borderWidth:1,
      marginHorizontal:10,
      backgroundColor:'white',

      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });