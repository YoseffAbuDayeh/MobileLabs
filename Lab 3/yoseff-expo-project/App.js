import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
someFunc = () => {
alert("hey hey hey!");
}

return (
<View style={styles.container}>
<Text>This is my first React Native app! -foluser</Text>
<Button title="PRESS ME" onPress={() => someFunc()}></Button>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});