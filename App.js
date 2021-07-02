import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextAreaView, StatusBar, LogBox, SafeAreaView } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form.js';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    
  }, [cantidad, interes, meses]);

  const calculate = () => {
    if (!cantidad) {
      setErrorMessage('No hay ninguna cantidad');
    } else if (!interes) {
      setErrorMessage('Ingresa los intereses')
    } else if (!meses) {
      setErrorMessage('No se seleccionó ningún plazo')
    } else {
      setErrorMessage('')
      const i = interes / 100;
      const algo = cantidad * (1 + i)
      setTotal(algo)
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}> Préstamos</Text>
        <Form setCantidad={setCantidad} setInteres={setInteres} setMeses={setMeses}  />
      </SafeAreaView>
      <ResultCalculation cantidad={cantidad} interes={interes} meses={meses} total={total} errorMessage={errorMessage} />
      <Footer calculate={calculate}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: "center"
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15
  }
})