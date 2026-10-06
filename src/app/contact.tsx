import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CONTACT US</Text>

      <Text style={styles.description}>
        Have a question or need help with your booking? Send us a message and
        we will get back to you.
      </Text>

      <Text style={styles.label}>FULL NAME</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
      />

      <Text style={styles.label}>EMAIL ADDRESS</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        keyboardType="email-address"
      />

      <Text style={styles.label}>PHONE NUMBER</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>MESSAGE</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Type your message"
        multiline
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>SEND MESSAGE</Text>
      </Pressable>

      <View style={styles.infoBox}>
        <Text style={styles.heading}>ADVENTURE ESCAPE SA</Text>
        <Text style={styles.infoText}>Western Cape, South Africa</Text>
        <Text style={styles.infoText}>Open Monday to Saturday</Text>
        <Text style={styles.infoText}>Adventure enquiries and bookings welcome</Text>
      </View>
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
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
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

  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },

  button: {
    backgroundColor: '#111111',
    padding: 16,
    alignItems: 'center',
    marginBottom: 25,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  infoBox: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginBottom: 40,
  },

  heading: {
    fontWeight: 'bold',
    marginBottom: 12,
  },

  infoText: {
    marginBottom: 8,
  },
});