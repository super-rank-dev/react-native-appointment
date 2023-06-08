import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import axios from 'react-native-axios'

export default function CreateScreen() {

    const [title, setTitle] = useState('Title');
    const [description, setDescription] = useState('Description');

    const subitData = () => {
        axios.post('https://api.macrokennel.com/api/posts', {
            title: title,
            description: description
        }).then(function (response) {
            console.log(response);
            alert('Success')
        }).catch(function (error) {
            console.log(error);
            alert('Error')
        });
    }
    return (
        <ScrollView >
            <View style={styles.container}>
                <TextInput
                    placeholder='Title'
                    style={styles.input}
                    onChangeText={text => setTitle(text)}
                />
                <TextInput
                    placeholder='Description'
                    style={styles.input}
                    onChangeText={text => setDescription(text)}
                />

                <Pressable style={styles.button} onPress={subitData}>
                    <Text style={styles.text}>
                        Save
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },

    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginHorizontal: 10,
        borderRadius: 7,
        backgroundColor: 'black',
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})