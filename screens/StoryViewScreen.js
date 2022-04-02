import React, { Component,useEffect, useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  StatusBar,
  Image,
  Button,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';


const StoryViewScreen = ({route,navigation})=>{   

  const { itemId, storyDescription,name,author, otherParam } = route.params;

  const str = "This is a string. For demo to split the text. If its long more then 5 characters. But some string is short. And it will not split. the short length string it will only split the long string which is more then 5 words.";

  let splitedtext ="sdsf";

  const [formattedStoryDescription, setFormattedStoryDescription] = useState([]);


  useEffect(() => {
        // console.log(storyDescription); 
       // StatusBar.setHidden(true);
      StatusBar.setTranslucent(true)
      StatusBar.setBackgroundColor('#FFFFFF');
      StatusBar.setBarStyle('dark-content');
   
     // StatusBar.setHidden(false, "fade");

      navigation.setOptions({
        headerRight: () => (
          <View style={{flexDirection:'row'}}>  

          <TouchableOpacity
          onPress={()=>{
            alert('Dark Mode');
          }}
          >
           <Image
         //title="Update count" 
          source={{uri:'https://img.icons8.com/ios-glyphs/452/day-and-night.png'}}
          style={{width:25,height:25,marginLeft:25,}}
          /> 
          </TouchableOpacity>



         <TouchableOpacity
          onPress={()=>{
            alert('Text Size');
          }}
          >
           <Image
         //title="Update count" 
          source={{uri:'https://img.icons8.com/material-sharp/452/increase-font.png'}}
          style={{width:25,height:25,marginLeft:25,}}
          /> 
          </TouchableOpacity>


          <TouchableOpacity
          onPress={()=>{
            alert('Love it');
          }}
          >
           <Image
         //title="Update count" 
          source={{uri:'https://cdn-icons.flaticon.com/png/512/2901/premium/2901197.png?token=exp=1642417007~hmac=200b131b5fb98466c30e3a2e37269f22'}}
          style={{width:25,height:25,marginLeft:25,}}
          /> 
          </TouchableOpacity>

          



          
          <TouchableOpacity
          onPress={()=>{
            alert('Book Marked');
          }}
          >
           <Image
         //title="Update count" 
          source={{uri:'https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png'}}
          style={{width:25,height:25,marginLeft:25,marginTop:1,}}
          /> 
          </TouchableOpacity>       
        
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

       //console.log(totn_string.concat('On','The','Net'));
         let appendtext = "";
         let noOfTexts =100;
         for (var i = 0; i < storyDescription.length; i++) {
          //console.log(storyDescription.charAt(i));
          appendtext+=storyDescription.charAt(i);

          

          if(storyDescription.charAt(i)=='.' && noOfTexts<i
          ){

            //console.log("noOfTexts");

            //console.log(noOfTexts);
            //console.log(i)

            appendtext+='\n\n';
            noOfTexts+=225;

          }
       }

       const output =appendtext;

      //  const output = str.replace(
      //   /\.(\s+)[A-Z]/g
      // );

      // const output=storyDescription.replace(/.{400}/g, "$&" + "\n\n");
      //  const output = str.replace(
      //    /(?:[^\s.]+\s+){7}|\./g,
      //    '$&<br>'
      //  );
            console.log(output);
         // const test122= output.replace(/<br\s*\\?>/g, "\r\n");
         // console.log(test122);

          //const fixed = note.body.replace();


           //splitedtext=output;
           //console.log(splitedtext);
           setFormattedStoryDescription(output);



	}, []);



      return (
        <View style={styles.container}>
  
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:10}}>
            <Text style={styles.name}>{name}</Text>
            <Text 
            onPress={()=>{
              alert('go to author')
            }}
            style={styles.price}>{author}</Text>
            <Text style={styles.description}>
            {formattedStoryDescription}
            </Text>
          </View>
      
          <View style={styles.separator}></View>
    
        </ScrollView>
      </View>
	);

};

export default StoryViewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
      //  backgroundColor: '#EEEEEE',
   //  backgroundColor: '#FFFFFF',

      },
      productImg:{
        width:200,
        height:200,
      },
      name:{
        textAlign:'left',
        fontSize:21,
        color:"#696969",

        // fontWeight:'bold'
      },
      price:{
        marginTop:1,
        fontSize:16,
        color:"green",
        //color:"#B28B5B",
        fontWeight:'bold'
      },
      description:{
        //textAlign:'left',
        textAlign:'justify',
        marginTop:15,
        paddingLeft:10,
        paddingRight:10,
        color:"#696969",
       // flexShrink:1,
        //fontSize:14,
      },
      star:{
        width:40,
        height:40,
      },
      btnColor: {
        height:30,
        width:30,
        borderRadius:30,
        marginHorizontal:3
      },
      btnSize: {
        height:40,
        width:40,
        borderRadius:40,
        borderColor:'#778899',
        borderWidth:1,
        marginHorizontal:3,
        backgroundColor:'white',
    
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      starContainer:{
        justifyContent:'center', 
        marginHorizontal:30, 
        flexDirection:'row', 
        marginTop:20
      },
      contentColors:{ 
        justifyContent:'center', 
        marginHorizontal:30, 
        flexDirection:'row', 
        marginTop:20
      },
      contentSize:{ 
        justifyContent:'center', 
        marginHorizontal:30, 
        flexDirection:'row', 
        marginTop:20
      },
      separator:{
        height:2,
        backgroundColor:"#eeeeee",
        marginTop:20,
        marginHorizontal:30
      },
      shareButton: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      shareButtonText:{
        color: "#FFFFFF",
        fontSize:20,
      },
      addToCarContainer:{
        marginHorizontal:30
      },
      header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
  });