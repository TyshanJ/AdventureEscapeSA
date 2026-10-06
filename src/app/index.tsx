import { useRouter } from 'expo-router';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/hero-western-cape.jpg')}
        style={styles.hero}
        imageStyle={styles.heroImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            ADVENTURE{'\n'}ESCAPE SA
          </Text>

          <Text style={styles.subtitle}>
            Explore • Experience • Escape
          </Text>

          <Text style={styles.heroText}>
            Discover exciting outdoor adventures throughout the Western Cape.
          </Text>

          <Pressable
            style={styles.whiteButton}
            onPress={() => router.push('/adventures' as any)}
          >
            <Text style={styles.blackButtonText}>
              EXPLORE ADVENTURES
            </Text>
          </Pressable>

          <Pressable
            style={styles.outlineButton}
            onPress={() => router.push('/calculate-fees' as any)}
          >
            <Text style={styles.whiteButtonText}>
              CALCULATE FEES
            </Text>
          </Pressable>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          ADVENTURE FOR EVERYONE
        </Text>

        <View style={styles.grid}>
          <View style={styles.card}>
            <Image
              source={require('../../assets/images/family-explorer.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Families</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require('../../assets/images/western-cape.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Tourists</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require('../../assets/images/mountain-adventure.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Schools</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require('../../assets/images/corporate-team-challenge.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Corporate Groups</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          MORE INFORMATION
        </Text>

        <Pressable
          style={styles.darkButton}
          onPress={() => router.push('/about' as any)}
        >
          <Text style={styles.darkButtonText}>
            ABOUT US
          </Text>
        </Pressable>

        <Pressable
          style={styles.contactButton}
          onPress={() => router.push('/contact' as any)}
        >
          <Text style={styles.contactButtonText}>
            CONTACT US
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  hero: {
    minHeight: 500,
    justifyContent: 'flex-end',
  },

  heroImage: {
    resizeMode: 'cover',
  },

  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 25,
    paddingBottom: 35,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },

  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },

  subtitle: {
    color: '#ffffff',
    marginBottom: 12,
  },

  heroText: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 20,
  },

  whiteButton: {
    backgroundColor: '#ffffff',
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },

  blackButtonText: {
    color: '#111111',
    fontWeight: 'bold',
  },

  outlineButton: {
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 16,
    alignItems: 'center',
  },

  whiteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  content: {
    padding: 20,
  },

  sectionTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 10,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  card: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    marginBottom: 16,
  },

  cardImage: {
    width: '100%',
    height: 110,
  },

  cardTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 12,
  },

  darkButton: {
    backgroundColor: '#111111',
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },

  darkButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  contactButton: {
    borderWidth: 1,
    borderColor: '#111111',
    padding: 16,
    alignItems: 'center',
    marginBottom: 40,
  },

  contactButtonText: {
    color: '#111111',
    fontWeight: 'bold',
  },
});