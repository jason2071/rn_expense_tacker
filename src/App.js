import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionList from './components/TransactionList';

const App = () => {
  const [toggleDialog, setToggleDialog] = useState(false);

  return (
    <View style={styles.body}>
      <AddTransaction
        toggleDialog={toggleDialog}
        setToggleDialog={setToggleDialog}
      />

      <View style={styles.container}>
        <View style={styles.title_bar}>
          <Text style={styles.title}>Expense Tracker</Text>
        </View>
        <Balance />
        <TransactionList />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button_add}
          onPress={() => setToggleDialog(true)}>
          <Text style={styles.button_add_text}>Add Transaction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F6F7FC',
  },
  container: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 24,
  },
  title_bar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  footer: {
    height: 70,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.0,
    elevation: 1,
  },
  button_add: {
    backgroundColor: '#9272F4',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_add_text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default App;
