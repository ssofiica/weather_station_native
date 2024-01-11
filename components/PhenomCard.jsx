import { StyleSheet, View, TouchableOpacity, Text, Button, Image } from 'react-native';
import React from 'react';
import image1 from '../assets/1.png'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'

const images = [image1, image2, image3, image4, image5, image6]

export default function PhenomCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Явление', { phenom_id: props.phenom_id });
    };

    return ( 
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={images[props.phenom_id-1]}
            />
            <View style={{flexDirection: 'row', width: '80%', marginTop: 20, marginLeft: 'auto', marginRight: 'auto'}}>
                <Text style={styles.title}>{props.phenom_name}</Text>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                     <Text style={styles.buttonText}>Подробнее</Text>
                </TouchableOpacity>
                {/* <Button  title='Подробнее' onPress={handlePress} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        height: 250,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 30,
        marginTop: 16,
    },
    title: { color: '#212529', fontSize: 20, marginRight: 5},
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        height: 150,
        borderRadius: 20,
        alignItems: 'center', // если вы хотите, чтобы содержимое было по центру
        justifyContent: 'space-around', 
        // или justifyContent: 'flex-end', // если хотите разместить содержимое у правой стороны
        resizeMode: 'cover', // значение 'cover' будет соответствовать значению object-fit в CSS
        resizeMode: 'cover',
    },
    button: {
        backgroundColor: '#ffffff',
        color: '#212529',
        borderColor: '#212529',
        borderWidth: 1,
        borderRadius: 18,
        padding: 5,
        fontSize: 20,
        marginLeft: 20,
    },
 })