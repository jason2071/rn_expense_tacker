import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ItemMinus = ({key, transaction}) => {
  return (
    <View style={styles.history_item_minus}>
      <TouchableOpacity
        style={styles.remove}
        onPress={() => console.log('delete minus')}>
        <Text style={styles.remove_text}>X</Text>
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.font_16}>{transaction.text}</Text>
        <Text style={styles.minus}>{transaction.amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font_16: {
    fontSize: 16,
  },
  minus: {
    fontSize: 16,
    color: '#c0392b',
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
  history_item_minus: {
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
  history_item_plus: {
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

export default ItemMinus;
