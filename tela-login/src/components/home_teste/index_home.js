import { StyleSheet, Text, View, TouchableOpacity,StatusBar,Image, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

//modulos
import styles from '../content/style_contents';

export default function Home(){
    <View style={sthome.box}>
        <Text> Python is the Best Programming language </Text>
        <Image src='/assets/wallpaper.jpeg'
        ></Image>
        <Text>I hate java</Text>
        <TouchableOpacity>Delete java of the Milky way</TouchableOpacity>
    </View>
};

const sthome = StyleSheet.create({
    box:{
        alignItems:'center',
        justifyContent:'center',
    },
    


});