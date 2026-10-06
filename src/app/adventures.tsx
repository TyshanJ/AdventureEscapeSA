import { useRouter } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function AdventuresScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>OUR ADVENTURES</Text>

      <Text style={styles.heading}>ADVENTURE PACKAGES</Text>

      <View style={styles.card}>
        <Image
          source={require('../../assets/images/hero-western-cape.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Ultimate Adventure Day</Text>
        <Text style={styles.price}>R1,500</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/ultimate-package' as any)}
        >
          <Text style={styles.buttonText}>VIEW PACKAGE</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../assets/images/family-explorer.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Family Explorer Package</Text>
        <Text style={styles.price}>R1,500</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/family-package' as any)}
        >
          <Text style={styles.buttonText}>VIEW PACKAGE</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../assets/images/mountain-adventure.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Mountain Adventure Package</Text>
        <Text style={styles.price}>R1,500</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/mountain-package' as any)}
        >
          <Text style={styles.buttonText}>VIEW PACKAGE</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../assets/images/corporate-team-challenge.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Corporate Team Challenge</Text>
        <Text style={styles.price}>R1,500</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push('/corporate-package' as any)}
        >
          <Text style={styles.buttonText}>VIEW PACKAGE</Text>
        </Pressable>
      </View>

      <Text style={styles.heading}>INDIVIDUAL ACTIVITIES</Text>

      <View style={styles.card}>
        <Image
          source={require('../../assets/images/ziplining-card.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Ziplining Adventure</Text>
        <Text style={styles.price}>R750</Text>

        <Pressable
          style={styles.outlineButton}
          onPress={() => router.push('/ziplining' as any)}
        >
          <Text style={styles.outlineText}>VIEW ACTIVITY</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../assets/images/kayaking.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Kayaking Experience</Text>
        <Text style={styles.price}>R750</Text>

        <Pressable
          style={styles.outlineButton}
          onPress={() => router.push('/kayaking' as any)}
        >
          <Text style={styles.outlineText}>VIEW ACTIVITY</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../../assets/images/rock-climbing.jpg')}
          style={styles.image}
        />
        <Text style={styles.name}>Rock Climbing Session</Text>
        <Text style={styles.price}>R750</Text>

        <Pressable
          style={styles.outlineButton}
          onPress={() => router.push('/rock-climbing' as any)}
        >
          <Text style={styles.outlineText}>VIEW ACTIVITY</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 25,
  },

  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 15,
    marginTop: 10,
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    paddingBottom: 15,
  },

  image: {
    width: '100%',
    height: 180,
  },

  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 12,
    marginHorizontal: 12,
  },

  price: {
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginTop: 5,
    marginBottom: 12,
  },

  button: {
    backgroundColor: '#111',
    padding: 14,
    marginHorizontal: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  outlineButton: {
    borderWidth: 1,
    borderColor: '#111',
    padding: 14,
    marginHorizontal: 12,
    alignItems: 'center',
  },

  outlineText: {
    color: '#111',
    fontWeight: 'bold',
  },
});