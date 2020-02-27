import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
  Dimensions,
  TextInput,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const AddTransaction = ({toggleDialog, setToggleDialog}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const onChangeTextTitle = newTitle => {
    setTitle(newTitle);
  };

  const onChangeTextAmount = newAmount => {
    setAmount(newAmount);
  };

  const handleCancel = () => {
    setToggleDialog(false);
  };

  const handleSubmit = () => {
    setToggleDialog(false);
    console.log({title, amount});
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={toggleDialog}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.container}>
        <View style={styles.body}>
          <View>
            <View style={styles.title_bar}>
              <Text style={styles.font_24}>Add new transaction</Text>
            </View>

            <View style={styles.padding_10}>
              <Text style={styles.input_title}>Title</Text>
              <TextInput
                style={styles.input_text}
                placeholder="Title"
                onChangeText={onChangeTextTitle}
              />
            </View>

            <View style={styles.amount_bar}>
              <Text style={styles.input_title}>Amount</Text>
              <Text style={styles.input_subtitle}>
                (negative - expense, positive - income)
              </Text>
              <TextInput
                style={styles.input_text}
                placeholder="Amount"
                onChangeText={onChangeTextAmount}
              />
            </View>

            <TouchableOpacity style={styles.button_add} onPress={handleSubmit}>
              <Text style={styles.button_text}>Add Transaction</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button_cancel}
              onPress={handleCancel}>
              <Text style={styles.button_text}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.9)',
  },
  body: {
    backgroundColor: '#fff',
    width: width - 30,
    height: (height * 9) / 16 / 1.25,
  },
  title_bar: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cacaca',
  },
  font_24: {
    fontSize: 24,
  },
  padding_10: {
    padding: 10,
  },
  amount_bar: {
    padding: 10,
    marginBottom: 10,
  },
  input_title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input_subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  input_text: {
    fontSize: 16,
    borderBottomColor: '#cacaca',
    borderBottomWidth: 1,
    padding: 10,
  },
  button_add: {
    backgroundColor: '#9272F4',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  button_cancel: {
    backgroundColor: '#000',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  button_text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default AddTransaction;
