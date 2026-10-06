import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useRouter } from 'expo-router';

export default function ZipliningScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.back}>← BACK TO ADVENTURES</Text>

      <Text style={styles.title}>ZIPLINING ADVENTURE</Text>

      <Image
        source={require('../../assets/images/ziplining-detail.jpg')}
        style={styles.image}
      />

      <Text style={styles.price}>R750</Text>

      <Text style={styles.description}>
        Experience breathtaking views while ziplining through the forest.
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>WHAT'S INCLUDED</Text>

        <Text style={styles.item}>• Safety briefing</Text>
        <Text style={styles.item}>• Equipment hire</Text>
        <Text style={styles.item}>• Professional guide</Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>ADD TO BOOKING</Text>
      </Pressable>

      <Pressable
  style={styles.outlineButton}
  onPress={() => router.push('/calculate-fees' as any)}
>
  <Text style={styles.outlineText}>CALCULATE FEES</Text>
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
    marginBottom: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  outlineButton: {
    borderWidth: 1,
    borderColor: '#111',
    padding: 16,
    alignItems: 'center',
    marginBottom: 40,
  },

  outlineText: {
    color: '#111',
    fontWeight: 'bold',
  },
});