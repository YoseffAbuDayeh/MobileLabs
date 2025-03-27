import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as MailComposer from 'expo-mail-composer';

const handleSendEmail = async (email, name) => {
    const isAvailable = await MailComposer.isAvailableAsync();
    if (isAvailable) {
        const options = {
            recipients: [email], 
            subject: 'MailComposer',
            body: `Dear ${name},`,
        };

        const result = await MailComposer.composeAsync(options);
        console.log('Email result:', result.status);
    } else {
        console.log('MailComposer is not available');
    }
};

const UserListItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => handleSendEmail(props.email, props.name)}>
            <View style={styles.listOfItem}>
                <Text style={styles.data}>{props.name} - {props.email}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listOfItem: {
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
    },
    data: {
        textAlign: "center",
    }
});

export default UserListItem;
