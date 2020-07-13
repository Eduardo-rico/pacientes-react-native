import React, {useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import Cita from './componentes/Cita.js';
import Formulario from './componentes/Formulario.js';

const App = () => {
  //definir el state de citas
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'hook', propietario: 'juan', sintomas: 'no come'},
    {id: '2', paciente: 'redux', propietario: 'lalo', sintomas: 'no no duerme'},
    {id: '3', paciente: 'native', propietario: 'itzel', sintomas: 'no baila'},
    {id: '4', paciente: 'vue', propietario: 'ilse', sintomas: 'no canta'},
  ]);

  //elimina pacientes del state
  const eliminaPaciente = (id) => {
    setCitas((citasActuales) => {
      //toma el state actual y lo filtra quitando el que es igual al id que le pasa
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador De Citas</Text>
      <Formulario />
      <Text style={styles.titulo}>
        {citas.length > 0
          ? 'Administra tus citas'
          : 'No hay citas, agrega una!'}
      </Text>
      <FlatList
        data={citas}
        renderItem={({item}) => (
          <Cita cita={item} eliminaPaciente={eliminaPaciente} />
        )}
        keyExtractor={(cita) => cita.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    minHeight: '100%',
  },
  titulo: {
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
