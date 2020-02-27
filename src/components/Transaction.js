import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GlobalContext} from '../context/GlobalState';

const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <View
      style={[transaction.amount < 0 ? styles.item_minus : styles.item_plus]}>
      <TouchableOpacity
        style={styles.remove}
        onPress={() => deleteTransaction(transaction.id)}>
        <Text style={styles.remove_text}>X</Text>
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.font_16}>{transaction.text}</Text>
        <Text style={styles.font_16}>
          {sign}${Math.abs(transaction.amount)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font_16: {
    fontSize: 16,
  },
  remove: {
    backgroundColor: '#c0392b',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  remove_text: {
    color: '#fff',
    fontSize: 16,
  },
  item_minus: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRightColor: '#c0392b',
    borderRightWidth: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  item_plus: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    borderRightColor: '#2ecc71',
    borderRightWidth: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  desc: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
});

export default Transaction;
