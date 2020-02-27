import React, {useContext} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Transaction from './Transaction';
import {GlobalContext} from '../context/GlobalState';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
      <View style={styles.history_bar}>
        <Text style={styles.font_16}>History</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  history_bar: {
    padding: 10,
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  font_16: {
    fontSize: 16,
  },
});

export default TransactionList;
