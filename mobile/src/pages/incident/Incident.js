import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import logoImg from '../../assets/logo.png'

import styles from './style'
import api from '../../services/api';

const Incident = () => {
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  async function loadIncidents() {
    const res = await api.get('incident', {
      params: {
        page
      }
    });

    if (loading) {
      return
    }

    if (total > 0 && incidents.length === total) {
      return
    }

    setLoading(true)
    setIncidents([...incidents, ...res.data])
    setTotal(res.headers['x-total-count'])
    setPage(page + 1)
    setLoading(false)

  }

  useEffect(() => {
    loadIncidents()
  }, [])

  const navigation = useNavigation()

  const navigationToDetail = (incident) => {
    navigation.navigate('Detail', { incident })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} caso(s)</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>{
              Intl.NumberFormat('pt-BR',
                {
                  style: "currency",
                  currency: 'BRL'
                }).format(incident.value)}
            </Text>

            <TouchableOpacity style={styles.detailsButton} onPress={() => navigationToDetail(incident)}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />


    </View>
  );
};

export default Incident;