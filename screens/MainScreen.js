import React, { Component,useEffect, useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ToastAndroid,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';




const MainScreen = ({navigation})=>{



    const [storys, setStorys] = useState([]);

   



 

    useEffect(() => {


      navigation.setOptions({
        headerRight: () => (
         <View style={{flexDirection:'row'}}>            
          <TouchableOpacity
          onPress={()=>{
            ToastAndroid.show('Profile', ToastAndroid.SHORT)

          }}
          >
          <Image
          
       
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
         
         status:doc.data().author,
         image:"https://bootdey.com/img/Content/avatar/avatar7.png",
         })
         setStorys(storys);
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
            <Image source={{uri:'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}}
             style={{width:100,height:120,borderRadius:10}}  />
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
                  <TouchableOpacity
                      onPress={()=>{
                        ToastAndroid.show('Bookmark', ToastAndroid.SHORT)
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
      backgroundColor:'#fffF',
      padding:0,
      borderRadius:15,
      marginTop:15,
      marginLeft:15,
      marginRight:15,
    
    },
    pic: {
      
    },
    nameContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 280,

    },
    nameTxt: {
      marginLeft:15,
      fontWeight: '600',
      color: '#222',
      fontSize: 14,
      width:200,

    },
    mblTxt: {
     // fontWeight: '200',
     // color: '#777',
      width:22,
      height:22,
     // color:'black',
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