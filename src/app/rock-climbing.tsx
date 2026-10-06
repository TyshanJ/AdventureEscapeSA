import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useRouter } from 'expo-router';

export default function RockClimbingScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.back}>← BACK TO ADVENTURES</Text>

      <Text style={styles.title}>ROCK CLIMBING SESSION</Text>

      <Image
        source={require('../../assets/images/rock-climbing.jpg')}
        style={styles.image}
      />

      <Text style={styles.price}>R750</Text>

      <Text style={styles.description}>
        Challenge yourself with an exciting guided rock climbing experience in a
        safe outdoor environment.
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>WHAT'S INCLUDED</Text>

        <Text style={styles.item}>• Safety briefing</Text>
        <Text style={styles.item}>• Climbing equipment</Text>
        <Text style={styles.item}>• Helmet and harness</Text>
        <Text style={styles.item}>• Professional guide</Text>
        <Text style={styles.item}>• Guided climbing session</Text>
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