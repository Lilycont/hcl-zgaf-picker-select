import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';
export default function ResultCalculation({ cantidad, interes, meses, total, errorMessage }) {
  return (
    <View style={styles.content}>
      {!errorMessage ?
        <View style={styles.boxResult}>
          <Text style={styles.title} >Detalle Préstamo</Text>
          <DataResult title="Cantidad Solicitada $" value={`${cantidad ? cantidad : 0}`} />
          <DataResult title="% Interes" value={`${interes ? interes : 0}`} />
          <DataResult title="Plazos" value={`${meses ? meses : 0}`} />
          <DataResult title="Pago Mensual" value={`${total ? total : 0}`} />
        </View> :
        <View style={styles.error}>
          {errorMessage}
        </View>
      }

    </View>
  )
}

const DataResult = ({ title, value }) => {
  return (
    <View >
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: colors.WARNING_COLOR,
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: colors.SECONDARY_COLOR
  }
})