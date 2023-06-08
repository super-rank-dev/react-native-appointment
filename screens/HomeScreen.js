import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import axios from 'react-native-axios'
import Loader from '../components/Loader';


export default function HomeScreen() {

    const [loader, setLoader] = useState(true);
    const [posts, setposts] = useState([]);

    const getPosts = async () => {
        try {
            axios.get('https://api.macrokennel.com/api/posts').then(res => {
                setposts(res.data.data);
            })
        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, [])


    const deleteData = (id) => {
        axios.delete(`https://api.macrokennel.com/api/posts/${id}`)
            .then(res => {
                getPosts();
            })
    }

    const ItemList = (props) => {
        return (
            <View style={styles.cart}>
                <Text style={styles.cartTitle}>
                    {props.data.title}
                </Text>
                <Text style={styles.cartDescription}>
                    {props.data.description}
                </Text>
                <Text></Text>
                <Button
                    title="Delete"
                    onPress={() => deleteData(props.data.id)}
                />
            </View>
        );
    }

    const renderItem = ({ item }) => (
        <ItemList data={item} />
    );

    return (
        <View style={styles.container}>
            <View>
                <Button
                    title="Reload"
                    onPress={() => getPosts()}
                />
            </View>
            <View style={styles.content}>
                {loader && <Loader />}
                {
                    !loader && (
                        <View>
                            <FlatList
                                data={posts}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                            />
                        </View>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    cart: {
        padding: 10,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },

    cartTitle: {
        fontSize: 18,
    },

    cartDescription: {
        paddingTop: 10,
        fontSize: 15,
        textAlign: "justify",
    },
})