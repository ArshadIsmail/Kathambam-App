import React, { Component,useEffect, useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  ScrollView,
  ToastAndroid,
} from 'react-native';





const VersionScreen = ({navigation})=>{




      

      return (
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Image style={styles.logo} source={{uri: 'https://img.icons8.com/fluency/452/general-warning-sign.png'}}/>
          <Text style={styles.companyName}>Update !</Text>
          <Text style={styles.slogan}>You are using an old version !</Text>
          <View style={styles.descriptionContent}>
            <Text style={styles.description}>
              This version is no more supported.Please update the App !
            </Text>
          </View>
          <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={ ()=>{
                         ToastAndroid.show('Opening play store', ToastAndroid.SHORT)
                      }}>
            <Text style={styles.buttonText}>Play Store  </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
	);

};


export default VersionScreen;

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
    
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#EE82EE',
      height:1000,
    },
    logo:{
      width:100,
      height:100,
      justifyContent: 'center',
      marginBottom:10,
      marginTop:30,
    },
    companyName: {
      fontSize:32,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    slogan:{
      fontSize:18,
      fontWeight: '600',
      color: '#228B22',
      marginTop:10,
    },
    descriptionContent:{
      padding:30
    },
    description:{
      fontSize:18,
      textAlign:'center',
      marginTop:10,
      color: '#FFFFFF',
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:100,
      borderRadius:30,
    },
    sendButton: {
      backgroundColor: "#FFFFFF",
    },
    buttonText: {
      color: '#EE82EE',
    }
  });