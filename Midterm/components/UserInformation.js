import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal, Text } from "react-native";

const UserListItem = (props) => {
    const [enteredFirst, setFirst] = useState("");
    const [enteredLast, setLast] = useState("");
    const [enteredEmail, setEmail] = useState("");

    const addItemHandler = () => {
        props.onAddItem({ 
            firstName: enteredFirst, 
            lastName: enteredLast, 
            email: enteredEmail 
        });
        setFirst("");
        setLast("");
        setEmail("");
        
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <Text style={styles.title}>Add Contact</Text>
            <Text style={styles.data}>First Name</Text>
                <TextInput
                    placeholder="First Name"
                    style={styles.input}
                    onChangeText={setFirst}
                    value={enteredFirst}
                />
                <Text style={styles.data}>Last Name</Text>
                    <TextInput
                        placeholder="Last Name"
                        style={styles.input}
                        onChangeText={setLast}
                        value={enteredLast}
                    />
                <Text style={styles.data}>Email address</Text>
                <TextInput
                    placeholder="Email Address"
                    style={styles.input}
                    onChangeText={setEmail}
                    value={enteredEmail}
                />
                <View style={styles.button}>
                    <Button title="Save" color="blue" onPress={addItemHandler} />
                </View>
            
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 50,
    },
    data: {
        textAlign: "left"
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
    },
    button: {
        width: "40%",
    },
    title:{
        fontSize: 60,
        marginBottom:50,
    }
});

export default UserListItem;
