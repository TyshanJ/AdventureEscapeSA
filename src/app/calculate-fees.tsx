import { useRouter } from 'expo-router';
import { useState } from 'react';

import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

const adventures = [
  { name: 'Ultimate Adventure Day', price: 1500 },
  { name: 'Family Explorer Package', price: 1500 },
  { name: 'Mountain Adventure Package', price: 1500 },
  { name: 'Corporate Team Challenge', price: 1500 },
  { name: 'Ziplining Adventure', price: 750 },
  { name: 'Kayaking Experience', price: 750 },
  { name: 'Rock Climbing Session', price: 750 },
];

export default function CalculateFeesScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [selected, setSelected] = useState<number[]>([]);

  function selectAdventure(index: number) {
    if (selected.includes(index)) {
      setSelected(selected.filter((item) => item !== index));
    } else {
      setSelected([...selected, index]);
    }
  }

  const subtotal = selected.reduce(
    (total, index) => total + adventures[index].price,
    0
  );

  let discountPercent = 0;

  if (selected.length === 2) {
    discountPercent = 5;
  } else if (selected.length === 3) {
    discountPercent = 10;
  } else if (selected.length >= 4) {
    discountPercent = 15;
  }

  const discountAmount = subtotal * (discountPercent / 100);
  const finalTotal = subtotal - discountAmount;

  function goToQuote() {
    router.push({
      pathname: '/confirmation',
      params: {
        name: fullName,
        subtotal: subtotal.toString(),
        discount: discountPercent.toString(),
        total: finalTotal.toString(),
        selected: selected
          .map((index) => adventures[index].name)
          .join(', '),
      },
    } as any);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CALCULATE FEES</Text>

      <Text style={styles.label}>FULL NAME</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter full name"
        value={fullName}
        onChangeText={setFullName}
      />

      <Text style={styles.label}>PHONE NUMBER</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>EMAIL ADDRESS</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.heading}>SELECT YOUR ADVENTURES</Text>

      {adventures.map((adventure, index) => {
        const isSelected = selected.includes(index);

        return (
          <Pressable
            key={adventure.name}
            style={[
              styles.option,
              isSelected && styles.selectedOption,
            ]}
            onPress={() => selectAdventure(index)}
          >
            <Text style={styles.optionText}>
              {isSelected ? '✓ ' : ''}
              {adventure.name}
            </Text>

            <Text style={styles.price}>R{adventure.price}</Text>
          </Pressable>
        );
      })}

      <View style={styles.discountBox}>
        <Text style={styles.heading}>DISCOUNT STRUCTURE</Text>

        <Text>1 booking = 0%</Text>
        <Text>2 bookings = 5%</Text>
        <Text>3 bookings = 10%</Text>
        <Text>4+ bookings = 15%</Text>
      </View>

      <View style={styles.totalBox}>
        <Text>Selected bookings: {selected.length}</Text>

        <Text>Subtotal: R{subtotal.toFixed(2)}</Text>

        <Text>Discount: {discountPercent}%</Text>

        <Text style={styles.finalTotal}>
          Final Total: R{finalTotal.toFixed(2)}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={goToQuote}
      >
        <Text style={styles.buttonText}>GET QUOTE</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 25,
  },

  label: {
    fontSize: 12,
    color: '#555',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 12,
    marginBottom: 18,
  },

  heading: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },

  option: {
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  selectedOption: {
    backgroundColor: '#eeeeee',
    borderColor: '#111111',
  },

  optionText: {
    flex: 1,
    paddingRight: 10,
  },

  price: {
    fontWeight: 'bold',
  },

  discountBox: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginTop: 15,
    marginBottom: 20,
    gap: 8,
  },

  totalBox: {
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
    marginBottom: 20,
    gap: 8,
  },

  finalTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },

  button: {
    backgroundColor: '#111111',
    padding: 16,
    alignItems: 'center',
    marginBottom: 40,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
