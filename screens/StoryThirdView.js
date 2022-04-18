import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,StatusBar,
   Linking, SafeAreaView, ScrollView,Image,ToastAndroid } from 'react-native';


   

const StoryThirdView = ({route,navigation})=> {
  

  const { itemId, storyDescription,name,author, otherParam } = route.params;


  
  const [showTheThing, setShowTheThing] = useState(true);


  const [formattedStoryDescription, setFormattedStoryDescription] = useState([]);

 

  useEffect(() => {
      
      StatusBar.setTranslucent(true)
      StatusBar.setBackgroundColor('transparent');
   StatusBar.setBarStyle('dark-content');
   

         let appendtext = "";
         let noOfTexts =100;
         for (var i = 0; i < storyDescription.length; i++) {
          appendtext+=storyDescription.charAt(i);

          

          if(storyDescription.charAt(i)=='.' && noOfTexts<i
          ){

            
            appendtext+='\n\n';
            noOfTexts+=225;

          }
       }

       const output =appendtext;
        
           setFormattedStoryDescription(output);



	}, []);





    
  return (

<SafeAreaView style={styles.container}>
{showTheThing &&
<View style={{flexDirection:'row',
 justifyContent: 'center',
        alignItems: 'center',
 marginTop:30,
 paddingBottom:10,
 visibity:false,
 }}>  

          <TouchableOpacity
          onPress={()=>{
            ToastAndroid.show('Dark Mode', ToastAndroid.SHORT)

          }}
          >
           <Image
          source={{uri:'https://img.icons8.com/ios-glyphs/452/day-and-night.png'}}
          style={{width:25,height:25,marginLeft:25,}}
          /> 
          </TouchableOpacity>



         <TouchableOpacity
          onPress={()=>{
            ToastAndroid.show('Text Size', ToastAndroid.SHORT)

          }}
          >
           <Image
          source={{uri:'https://img.icons8.com/material-sharp/452/increase-font.png'}}
          style={{width:25,height:25,marginLeft:25,}}
          /> 
          </TouchableOpacity>


          <TouchableOpacity
          onPress={()=>{
            ToastAndroid.show('Love it', ToastAndroid.SHORT)

          }}
          >
           <Image
          source={{uri:'https://pics.freeicons.io/uploads/icons/png/5806178711543238895-512.png'}}
          style={{width:25,height:25,marginLeft:25,}}
          /> 
          </TouchableOpacity>
          
          <TouchableOpacity
          onPress={()=>{
            ToastAndroid.show('Book Marked', ToastAndroid.SHORT)

          }}
          >
           <Image
          source={{uri:'https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png'}}
          style={{width:25,height:25,marginLeft:25,marginTop:1,}}
          /> 
          </TouchableOpacity>       
        
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
          }


      <ScrollView style={styles.scrollView}>


    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      backgroundColor: '#FFFFFF',
      }}>
        
      <View
        style={{
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 5,
          marginTop:10,
        }}>
 


        <Text
          style={{
            textAlign: 'center',
            fontSize: 23,
            fontWeight: '600',
            color: '#333',
             marginTop:10,
          }}>
         {name}
        </Text>

                <Text
          style={{
            textAlign: 'center',
            fontWeight: '300',
            fontStyle: 'italic',
            fontSize: 14,
            color: '#000',
          }}>
            {author} 
        </Text>
      
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'justify',
            marginTop:20,
            paddingHorizontal:0,
          }}
          
          onPress
           ={()=>{
                     if(showTheThing){
                         setShowTheThing(false);
                     }else{
                        setShowTheThing(true);
 
                     }
                       }}
  
          >
          {formattedStoryDescription}

        </Text>
        
        <Text
          style={{
            textAlign: 'right',
            fontWeight: '300',
            fontStyle: 'italic',
            fontSize: 16,
            color: '#000',
          }}>
        </Text>
        

      
      </View>
    </View>

 </ScrollView>
    </SafeAreaView>

  );
}

export default StoryThirdView;
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 0,
    paddingTop:30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});