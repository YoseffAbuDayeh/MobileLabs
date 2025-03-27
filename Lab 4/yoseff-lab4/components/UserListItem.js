import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const UserListItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listOfItem}>
                <Text style={styles.data}>{props.name} / {props.email}</Text>
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
    data:{
        textAlign: "center",
    }
});

export default UserListItem;
