import { useLocalSearchParams, useRouter } from 'expo-router';

import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function ConfirmationScreen() {
  const router = useRouter();

  const {
    name,
    subtotal,
    discount,
    total,
    selected,
  } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.smallTitle}>QUOTE SUMMARY</Text>

      <Text style={styles.title}>
        YOUR ADVENTURE BOOKING
      </Text>

      <Text style={styles.description}>
        Review your selected adventures and total before confirming your booking.
      </Text>

      <View style={styles.box}>
        <Text style={styles.heading}>CUSTOMER</Text>

        <Text style={styles.text}>
          {name || 'Customer'}
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.heading}>
          SELECTED ADVENTURES
        </Text>

        <Text style={styles.text}>
          {selected || 'No adventures selected'}
        </Text>
      </View>

      <View style={styles.totalBox}>
        <View style={styles.row}>
          <Text>Subtotal</Text>
          <Text>R{subtotal || '0'}</Text>
        </View>

        <View style={styles.row}>
          <Text>Discount</Text>
          <Text>{discount || '0'}%</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.row}>
          <Text style={styles.finalLabel}>
            FINAL TOTAL
          </Text>

          <Text style={styles.finalTotal}>
            R{total || '0'}
          </Text>
        </View>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          CONFIRM BOOKING
        </Text>
      </Pressable>

      <Pressable
        style={styles.outlineButton}
        onPress={() => router.push('/' as any)}
      >
        <Text style={styles.outlineText}>
          RETURN HOME
        </Text>
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

  smallTitle: {
    marginTop: 50,
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    lineHeight: 23,
    color: '#555',
    marginBottom: 25,
  },

  box: {
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
    marginBottom: 15,
  },

  heading: {
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    lineHeight: 22,
  },

  totalBox: {
    backgroundColor: '#f2f2f2',
    padding: 18,
    marginTop: 5,
    marginBottom: 25,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  line: {
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    marginVertical: 8,
  },

  finalLabel: {
    fontWeight: 'bold',
  },

  finalTotal: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#111111',
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  outlineButton: {
    borderWidth: 1,
    borderColor: '#111111',
    padding: 16,
    alignItems: 'center',
    marginBottom: 40,
  },

  outlineText: {
    color: '#111111',
    fontWeight: 'bold',
  },
});