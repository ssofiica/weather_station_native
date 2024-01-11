import { useDispatch, useSelector } from 'react-redux';
import { setPhenomens, setSearch } from '../store/phenomSlice';
import React, { useEffect } from 'react';
import { axiosInstance } from '../api';
import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text, Button } from 'react-native';
import PhenomCard from '../components/PhenomCard';
import { commonStyles } from '../styles/common'


export default function ListScreen({ navigation }) {
    const dispatch = useDispatch();
    const { phenomens } = useSelector((store) => store.phenom);
    const { searchText } = useSelector((store) => store.phenom);
    
    useEffect(() => {
        const getPhenomens = async() => {
            try{
                const response = await axiosInstance.get('/phenomens/');
                dispatch(setPhenomens(response.data.phenomens))
            } catch(e) {
            console.log(e)
            }}
        getPhenomens()
    }, [dispatch]);

    const handleSearch = () => {
        const getPhenomens = async() => {
            try{
                const response = await axiosInstance.get(`/phenomens/?value=${searchText}`);
                dispatch(setPhenomens(response.data.phenomens))
            } catch(e) {
            console.log(e)
            }}
        getPhenomens();
    };
    
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                 <TextInput
                     style={styles.input}
                     placeholder="Название явления"
                     value={searchText}
                     onChangeText={(text) => dispatch(setSearch(text))}
                     placeholderTextColor={'#aeb2b6'}
                     onSubmitEditing={handleSearch}
                 />
                 {/* <TouchableOpacity style={[styles.button, commonStyles.rounded_sm, commonStyles.shadow]} onPress={handleSearch}>
                     <Text style={styles.buttonText}>Поиск</Text>
                 </TouchableOpacity> */}
             </View>
            {!!phenomens && phenomens.map((phenomen) => <PhenomCard key={phenomen.phenom_id} {...phenomen} navigation={navigation} />)}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10,
        backgroundColor: '#E3E9DF',
    },
    input: {
        width: '80%',
        height: 36,
        backgroundColor: '#ffffff',
        borderColor: '#212529',
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#212529',
        borderRadius: 18,
        fontSize: 16,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
});