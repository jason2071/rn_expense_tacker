import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Balance = () => {
  return (
    <>
      <View style={styles.bottom}>
        <Text style={styles.balance}>YOUR BALANCE</Text>
        <Text style={styles.money}>$260.00</Text>
      </View>

      <View style={styles.tracker}>
        <View>
          <Text style={styles.income_text}>INCOME</Text>
          <Text style={styles.income}>$500.00</Text>
        </View>

        <View style={styles.line_vertical} />

        <View>
          <Text style={styles.expense_text}>EXPENSE</Text>
          <Text style={styles.expense}>$240.00</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottom: {
    marginBottom: 20,
  },
  balance: {
    fontSize: 18,
    marginBottom: 10,
  },
  money: {
    fontSize: 32,
  },
  tracker: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 30,
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
  income_text: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center',
  },
  income: {
    fontSize: 22,
    marginBottom: 10,
    alignSelf: 'center',
    color: '#2ecc71',
  },
  line_vertical: {
    width: 1,
    height: 50,
    backgroundColor: '#cacaca',
  },
  expense_text: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center',
  },
  expense: {
    fontSize: 22,
    marginBottom: 10,
    alignSelf: 'center',
    color: '#c0392b',
  },
});
export default Balance;
