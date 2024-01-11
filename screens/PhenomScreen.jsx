import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPhenom, setPhenom } from '../store/phenomSlice';
import { axiosInstance } from '../api';
import image1 from '../assets/1.png'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'

const images = [image1, image2, image3, image4, image5, image6]

export default function PhenomScreen({ route }) {
    const { phenom_id } = route.params;
    const dispatch = useDispatch();
    const { phenom } = useSelector((store) => store.phenom);
    useEffect(() => {
        const getPhenom = async() => {
            try{
                const response = await axiosInstance.get(`/phenomens/${phenom_id}`);
                dispatch(setPhenom(response.data))
            } catch(e) {
            console.log(e)
            }}
        getPhenom()
        return () => {
            dispatch(resetPhenom());
        };
    }, [dispatch]);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={images[phenom_id-1]}
            />
            <View style={{flexDirection: 'column', width: '80%', marginTop: 20, marginLeft: 'auto', marginRight: 'auto'}}>
                <Text style={styles.title}>{phenom.phenom_name}</Text>
                <Text style={styles.text}>{phenom.description}</Text>
                <Text style={styles.text}>Единицы измерения - {phenom.unit}</Text>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewContent: {
        backgroundColor: '#E3E9DF',
    },
    card: {
        width: '80%',
        height: 350,
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
    text: {color: '#212529', fontSize: 16, marginTop: 5},
 })