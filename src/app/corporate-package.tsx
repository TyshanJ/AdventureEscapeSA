import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useRouter } from 'expo-router';

export default function CorporatePackageScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.back}>← BACK TO ADVENTURES</Text>

      <Text style={styles.title}>CORPORATE TEAM CHALLENGE</Text>

      <Image
        source={require('../../assets/images/corporate-team-challenge.jpg')}
        style={styles.image}
      />

      <Text style={styles.price}>R1500</Text>

      <Text style={styles.description}>
        Build teamwork and communication through exciting outdoor group challenges.
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>WHAT'S INCLUDED</Text>

        <Text style={styles.item}>• Team-building activities</Text>
        <Text style={styles.item}>• Outdoor challenges</Text>
        <Text style={styles.item}>• Safety briefing</Text>
        <Text style={styles.item}>• Professional guide</Text>
        <Text style={styles.item}>• Group adventure activities</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.push('/calculate-fees' as any)}
      >
        <Text style={styles.buttonText}>BOOK NOW</Text>
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

  back: {
    fontSize: 12,
    color: '#666',
    marginTop: 50,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },

  price: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },

  infoBox: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginBottom: 20,
  },

  infoTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
  },

  item: {
    fontSize: 15,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#111',
    padding: 16,
    alignItems: 'center',
    marginBottom: 40,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});