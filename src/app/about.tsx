import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>ABOUT US</Text>

      <Image
        source={require('../../assets/images/about-adventure.jpg')}
        style={styles.image}
      />

      <Text style={styles.heading}>ADVENTURE ESCAPE SA</Text>

      <Text style={styles.text}>
        Adventure Escape SA was established in 2024 by Liam Daniels.
        We provide exciting and professionally guided outdoor adventure
        experiences throughout the Western Cape.
      </Text>

      <Text style={styles.text}>
        Our adventures are designed for individuals, families, tourists,
        schools and corporate groups who want to explore nature and enjoy
        memorable outdoor experiences.
      </Text>

      <View style={styles.box}>
        <Text style={styles.boxTitle}>OUR GOAL</Text>

        <Text style={styles.text}>
          Our goal is to provide safe, exciting and enjoyable adventure
          experiences while promoting nature and eco-tourism.
        </Text>
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
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 20,
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 18,
  },

  box: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginBottom: 40,
  },

  boxTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
  },
});