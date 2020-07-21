import React, { useState, useEffect, } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation} from '@react-navigation/native'


import logoImg from '../../assets/logo.png'
import api from '../../services/api'

import styles from './styles'

export default function Ongs() {
    const [ongsAnimal, setOngsAnimal] = useState([]);
    const [ongsSaude, setOngsSaude] = useState([]);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("Animal");
    const [typeSaude, setTypeSaude] = useState("Saude");
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    async function loadOngs() {
        if (loading) {
            return;
        }
        setLoading(true);



        const responseAnimal = await api.get(`/ongs/${type}`/*, {params: { type },}*/);
        const responseSaude = await api.get(`/ongs/${typeSaude}`/*, {params: { typeSaude },}*/);


        setOngsAnimal([...ongsAnimal, ...responseAnimal.data]);
        setOngsSaude([...ongsSaude, ...responseSaude.data]);
    }

    useEffect(() => {
        loadOngs();
    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>ONGS registradas</Text>
            <Text style={styles.description}>ONGS para suporte animal</Text>
            <FlatList
                style={styles.incidentList}
                data={ongsAnimal}
                keyExtractor={ongs => String(ongs.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: ongs }) => (
                    <View style={styles.incidentList}>
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>ONG:</Text>
                            <Text style={styles.incidentValue}>{ongs.name}</Text>
                            <Text style={styles.incidentProperty}>Tipo:</Text>
                            <Text style={styles.incidentValue}>{ongs.type}</Text>
                            <Text style={styles.incidentProperty}>Localização:</Text>
                            <Text style={styles.incidentValue}>{ongs.city}/{ongs.uf}</Text>
                            <Text style={styles.incidentProperty}>Contato:</Text>
                            <Text style={styles.incidentValueFone}>Fone: {ongs.whatsapp} E-mail: {ongs.uf}</Text>
                            <Text style={styles.incidentValue}>E-mail: {ongs.email}</Text>
                        </View>
                    </View>)} />
            <Text style={styles.description}>ONGS na área de saúde</Text>
            <FlatList
                style={styles.incidentList}
                data={ongsSaude}
                keyExtractor={ongs => String(ongs.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: ongs }) => (
                    <View style={styles.incidentList}>
                        <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                            <Text style={styles.incidentValue}>{ongs.name}</Text>
                            <Text style={styles.incidentProperty}>Tipo:</Text>
                            <Text style={styles.incidentValue}>{ongs.type}</Text>
                            <Text style={styles.incidentProperty}>Localização:</Text>
                            <Text style={styles.incidentValue}>{ongs.city}/{ongs.uf}</Text>
                            <Text style={styles.incidentProperty}>Contato:</Text>
                            <Text style={styles.incidentValueFone}>Fone: {ongs.whatsapp} E-mail: {ongs.uf}</Text>
                            <Text style={styles.incidentValue}>E-mail: {ongs.email}</Text>
                        </View>
                    </View>)} />
        </View>
    );
}