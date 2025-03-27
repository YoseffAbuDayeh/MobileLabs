import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import UserListItem from './components/UserListItem';
import UserItemInput from './components/UserInformation';

export default function App() {
  const [userList, setUserList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addUserItemHandler = (userItem) => {
    setUserList((userList) => [
        ...userList,
        { 
          key: Math.random().toString(), 
          name: `${userItem.firstName} ${userItem.lastName}`, 
          email: userItem.email 
      }
      

    ]);
    setIsAddMode(false);
};


  const removeUserHandler = itemId => {
    setUserList(
      userList => {
        return userList.filter((item) => item.key !== itemId);
      }
    );
  }

  return (
    <View style={styles.screen}>{}
    <TouchableOpacity style={styles.addButton} onPress={() => setIsAddMode(true)}>
      <Ionicons name="add-circle-outline" size={48}/>
  </TouchableOpacity>
    <Text style={styles.title}>Midterm</Text>
    <Text style={styles.subtitle}>y_abudayeh</Text>
      <UserItemInput visible={isAddMode} onCancel={() => setIsAddMode(false)} onAddItem={addUserItemHandler} />
      <FlatList
          data={userList}
          renderItem={(itemData) => (
              <UserListItem
                  id={itemData.item.key}
                  onDelete={removeUserHandler}
                  name={itemData.item.name}
                  email={itemData.item.email}
              />
          )}
      />{}
      <View style={styles.header}>

</View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 50,
      justifyContent: "space-between", 
  },
  listContainer: {
      flex: 1,
  },
  title:{
      fontSize: 50,
      textAlign: "center"
  },
  subtitle:{
      fontSize: 25,
      marginBottom:50,
      textAlign: "center",
  },
  addButton: {
    position: 'absolute',
    right: 20,
    top: 20,
  },

});
