import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,StatusBar,
   Linking, SafeAreaView, ScrollView,Image } from 'react-native';


const StorySecondView = ({route,navigation})=> {
  

  const { itemId, storyDescription,name,author, otherParam } = route.params;


    const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [formattedStoryDescription, setFormattedStoryDescription] = useState([]);


  useEffect(() => {
        // console.log(storyDescription); 
       // StatusBar.setHidden(true);
      StatusBar.setTranslucent(true)
      StatusBar.setBackgroundColor('transparent');
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

<SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      //  backgroundColor: '#5372F0',
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
            //marginBottom: 0,
             marginTop:15,
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
            //color: 'green',
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
          }}>
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

export default StorySecondView;
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
    padding: 0,
    paddingTop:10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});