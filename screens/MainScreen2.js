import React, { Component,useEffect, useLayoutEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';




export default class Contacts extends Component {


  constructor(props) {
    super(props); 
    //let firebaseApp;
    //console.log(db);

    const [storys, setStorys] = useState([])


    const usersCollection = firestore().collection('storycollection')
    .onSnapshot((snapshot) =>
    setStorys(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    )
  );


  ////////////////////////////////
    /////////////////

     // firestore().collection('testcollection').onSnapshot(onResult, onError);

  //   const usersCollection = firestore().collection('testcollection')
  //   .onSnapshot((snapshot) =>            
  //   setStorys(
  //     snapshot.docs.map((doc) => (
  //       {
  //      id: doc.id,
  //      name: doc.description,
  //      status:"active",
  //     image:"https://bootdey.com/img/Content/avatar/avatar7.png",
  //     }))
  //   )

  // );




  // firestore()
  // .collection('testcollection')
  // .get()
  // .then(querySnapshot => {
  //   console.log('Total users: ', querySnapshot.size);


  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //   });
    
  // });

  // const usersCollection2 = firestore().collection('testcollection')
  // .get()
  // .then(querySnapshot => {
   
  //   const storys = querySnapshot.map((doc) => ({
  //     id: doc.id,
  //     name: doc.data().description,
  //     status:"active",
  //     image:"https://bootdey.com/img/Content/avatar/avatar7.png",
  //   }));
  //   setStorys(orgList);
  //   console.log("orglist", storys)

  // });

  // console.log(usersCollection2);
  // console.log(storys);

  // const unsubscribe = firestore()
  // .collection("organisations")
  // .onSnapshot((snapshot) => {
  //   const storys = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     name: doc.data().description,
  //     status:"active",
  //     image:"https://bootdey.com/img/Content/avatar/avatar7.png",
  //   }));
  //   setStorys(orgList);
  //   console.log("orglist", storys)
  // }, () => {
  //   setError(true)
  // });
  // setLoading(false);
  // return() => unsubscribe();



//////////////

  //////////////////////////////////

      //
      
 //const [storys, setStorys] = useState();
  // const [storys, setStorys] = useState([
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

 

    // //this.state = {
    //     calls: [
    //       {id:1,  name: "Story of my life",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
    //       {id:2,  name: "Monk Who sold his ferrari",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
    //       {id:3,  name: "Welcome to Boor",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
    //       {id:4,  name: "Tree of my life",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
    //       {id:5,  name: "Wings of fire",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
    //       {id:6,  name: "Adarjan kadukal", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
    //       {id:8,  name: "En walkai,En karthika", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
    //       {id:9,  name: "Atu or kana kalam",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
    //       {id:10, name: "Fermod Doe",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
    //       {id:11, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
    //     ]
    //   };

      //

    
  // Stop listening for updates when no longer required
  
    console.log(usersCollection);

    //const refss = db.collection('testcollection');
  //  const usersCollection = firestore().collection('Users');



    this.state = {
      calls: [
        {id:1,  name: "Story of my life",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:2,  name: "Monk Who sold his ferrari",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3,  name: "Welcome to Boor",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4,  name: "Tree of my life",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5,  name: "Wings of fire",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6,  name: "Adarjan kadukal", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8,  name: "En walkai,En karthika", status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9,  name: "Atu or kana kalam",    status:"active", image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:10, name: "Fermod Doe",  status:"active", image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
        {id:11, name: "Danny Doe",   status:"active", image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
      ]
    };
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.mblTxt}>Mobile</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return(
      <View style={{ flex: 1 }} >
        <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width:300,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});