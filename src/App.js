/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Dialog from 'react-native-dialog';

const App = () => {
  const [toggleDialog, setToggleDialog] = useState(false);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onChangeTextTitle = newTitle => {
    setText(newTitle);
  };

  const onChangeTextAmount = newAmount => {
    setAmount(newAmount);
  };

  const handleCancel = () => {
    setToggleDialog(false);
  };

  const handleSubmit = () => {
    setToggleDialog(false);
    console.log({text, amount});
  };

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.title_bar}>
          <Text style={styles.title}>Expense Tracker</Text>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.balance}>YOUR BALANCE</Text>
          <Text style={styles.money}>$260.00</Text>
        </View>

        <View style={styles.income_expense}>
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

        <View style={styles.history_bar}>
          <Text style={styles.font_16}>History</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.history_item_plus}>
            <Text style={styles.font_16}>Cash</Text>
            <Text style={styles.font_16}>+500</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Mouse</Text>
            <Text style={styles.font_16}>-120</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Mobile</Text>
            <Text style={styles.font_16}>-200</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Power bank</Text>
            <Text style={styles.font_16}>-60</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Pencil</Text>
            <Text style={styles.font_16}>-40</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Book</Text>
            <Text style={styles.font_16}>-10</Text>
          </View>

          <View style={styles.history_item_plus}>
            <Text style={styles.font_16}>Cash</Text>
            <Text style={styles.font_16}>+500</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Mouse</Text>
            <Text style={styles.font_16}>-120</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Mobile</Text>
            <Text style={styles.font_16}>-200</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Power bank</Text>
            <Text style={styles.font_16}>-60</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Pencil</Text>
            <Text style={styles.font_16}>-40</Text>
          </View>

          <View style={styles.history_item_minus}>
            <Text style={styles.font_16}>Book</Text>
            <Text style={styles.font_16}>-10</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button_add}
          onPress={() => setToggleDialog(true)}>
          <Text style={styles.button_add_text}>ADD</Text>
        </TouchableOpacity>
      </View>

      <Dialog.Container visible={toggleDialog}>
        <Dialog.Title>New Transaction</Dialog.Title>
        <Dialog.Input placeholder="Text" onChangeText={onChangeTextTitle} />
        <Dialog.Input
          placeholder="Amount"
          keyboardType="numbers-and-punctuation"
          onChangeText={onChangeTextAmount}
        />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Save" onPress={handleSubmit} />
      </Dialog.Container>
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
  income_expense: {
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
  history_bar: {
    padding: 10,
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  font_16: {
    fontSize: 16,
  },
  history_item_plus: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
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
  history_item_minus: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
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
  footer: {
    height: 70,
    padding: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
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
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: 10,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
  },
  button_add_text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default App;
