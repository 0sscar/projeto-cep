import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, Image, Linking, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';  // Adicione esta linha para usar ícones
import styles from "../../components/modal_login/style_contents";

export function Contatos(props) {
    const [people, setPeople] = useState([
        { name: 'David', key: 'Lukazdrz@gmail.com', github: 'https://github.com/Dav11ucas' },
        { name: 'Oscar', key: 'oscargabrieled@gmail.com', github: 'https://github.com/0sscar' },
        { name: 'Thalles', key: 'thallesgmkr@gmail.com', github: 'https://github.com/Bruthalles' },
        { name: 'Brenno', key: '', github: '' }
    ]);

    const handlePress = () => {
        Linking.openURL('https://github.com/0sscar/projeto-cep');
    };

    const handleEmailPress = (email) => {
        Linking.openURL(`mailto:${email}`);
    };

    const handleGithubPress = (github) => {
        Linking.openURL(github);
    };

    return (
        <View style={contato.container}>
            <Text style={contato.titulo}>Área de contatos</Text>
            <Text style={contato.titulo}>envolvidos no projeto: </Text>

            <FlatList
                data={people}
                renderItem={({ item }) => (
                    <View style={contato.itemContainer}>
                        <Text style={contato.itemName}>{item.name}</Text>
                        {item.key ? (
                            <TouchableOpacity onPress={() => handleEmailPress(item.key)}>
                                <Text style={contato.itemEmail}>e-mail: {item.key}</Text>
                            </TouchableOpacity>
                        ) : null}
                        {item.github ? (
                            <TouchableOpacity style={contato.githubContainer} onPress={() => handleGithubPress(item.github)}>
                                <FontAwesome name="github" size={24} color="#333" />
                                <Text style={contato.itemGithub}>GitHub</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                )}
            />

            <View style={contato.viewGit}>
                <Image 
                    style={contato.octo}
                    source={require('./octocat.png')}
                />

                <TouchableOpacity 
                    onPress={handlePress}
                    style={contato.btnGit}>
                    <Text style={contato.urlGit}> Clique aqui para ver o projeto </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                style={contato.btnHome} 
                onPress={() => props.navigation.navigate('home')}>
                <Text style={contato.btnHomeText}>←</Text>
            </TouchableOpacity>
        </View>
    );
}

const contato = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#398592',
        alignItems: 'center',
        padding: 10,
    },
    titulo: {
        fontSize: 22,
        alignSelf: 'center',
        paddingTop: '12%',
        marginBottom: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        elevation: 3,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemEmail: {
        fontSize: 16,
        color: '#00bbff',
        textDecorationLine: 'underline',
    },
    githubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    itemGithub: {
        fontSize: 16,
        color: '#333',
        textDecorationLine: 'underline',
        marginLeft: 5,
    },
    btnGit: {
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1f047a',
        height: 40, 
        width: 250,
        margin: 20,
        marginTop: 4,
        borderRadius: 50,
        elevation: 6,
    },
    viewGit: {
        backgroundColor: '#fff',
        elevation: 8,
        margin: 26,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        marginBottom: 60, //faz o elemento subir
    },
    octo: {
        alignSelf: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        height: 50,
        width: 50,
        margin: 10,
        marginTop: 20,
    },
    urlGit: {
        color: '#00bbff',
        textDecorationLine: 'underline',
    },
    btnHome: {
        backgroundColor: '#0775A6',  // Cor do botão
        padding: 10,
        marginBottom: 20,
        height: 55,
        width: 200,
        borderRadius: 50,
        elevation: 6, 
        height: 90 , 
        width: 700, 
        marginBottom: -44,
    },
    btnHomeText: {
        color: 'yellow',  // Cor do texto do botão
        fontSize: 22,
        textAlign: 'center',
    },
});

export default Contatos;
