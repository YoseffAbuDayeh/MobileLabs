import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const UserListItem = (props) => {
    const [enteredUser, setUser] = useState("");
    const [enteredEmail, setEmail] = useState("");

    const addItemHandler = () => {
        props.onAddItem({ name: enteredUser, email: enteredEmail });
        setUser("");
        setEmail("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={setUser}
                    value={enteredUser}
                />
                <TextInput
                    placeholder="Number/Email Address"
                    style={styles.input}
                    onChangeText={setEmail}
                    value={enteredEmail}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="orange" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" color="green" onPress={addItemHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
});

export default UserListItem;
