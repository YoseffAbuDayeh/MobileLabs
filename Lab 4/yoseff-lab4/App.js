import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import UserListItem from './components/UserListItem';
import UserItemInput from './components/UserInformation';

export default function App() {
  const [userList, setUserList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addUserItemHandler = (userItem) => {
    setUserList((userList) => [
        ...userList,
        { key: Math.random().toString(), name: userItem.name, email: userItem.email },
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
      <Button title="Add Contact" color = 'green' onPress={() => setIsAddMode(true)} />
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
});
