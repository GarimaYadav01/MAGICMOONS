import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
    const data = [
        { id: '1', title: 'Item 1', },
        { id: '2', title: 'Item 2', },
        { id: '3', title: 'Item 3', },
        // Add more items as needed
    ];

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../image/img3.jpg')} style={styles.profileImage} />
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.icon}>
                        <Image source={require("../image/plus.png")} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} >
                        <Image source={require("../image/loupe.png")} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.cor}>Courses</Text>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
    },
    profileImage: {
        width: 70,
        height: 70,
        // borderRadius: 25,
    },
    iconContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 15,
    },
    listContent: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    itemContainer: {
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    itemText: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
    },
    cor: {
        fontSize: 25,
        color: "black",
        fontWeight: "bold"
    }
});
