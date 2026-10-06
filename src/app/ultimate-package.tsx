import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useRouter } from 'expo-router';

export default function UltimatePackageScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.back}>← BACK TO ADVENTURES</Text>

      <Text style={styles.title}>ULTIMATE ADVENTURE DAY</Text>

      <Image
        source={require('../../assets/images/hero-western-cape.jpg')}
        style={styles.image}
      />

      <Text style={styles.price}>R1500</Text>

      <Text style={styles.description}>
        Enjoy a full day of exciting outdoor activities and unforgettable
        adventure experiences in the Western Cape.
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>WHAT'S INCLUDED</Text>

        <Text style={styles.item}>• Guided outdoor adventure</Text>
        <Text style={styles.item}>• Safety briefing</Text>
        <Text style={styles.item}>• Adventure equipment</Text>
        <Text style={styles.item}>• Scenic outdoor activities</Text>
        <Text style={styles.item}>• Professional guide</Text>
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