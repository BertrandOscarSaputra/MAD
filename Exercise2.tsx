import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return [
    <ScrollView style={styles.main}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.backgroundImg}
          source={require('./Logo/skies.jpg')}
        />
        <Image style={styles.img} source={require('./Logo/picture.jpg')} />
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Welcome to {'  '}My Profile</Text>
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.heading1}>Hey There! 👋</Text>
        <Text style={styles.heading4}>My name is...</Text>
        <Text style={styles.heading2}>Bertrand Oscar</Text>
        <View style={styles.wrapper}>
          <View style={styles.line} />
        </View>
        <Text style={styles.heading3}>About Me:</Text>
        <Text style={styles.p}>
          {'     '}I am a student at Universitas Klabat currently majoring in
          Computer Science. I thrive on creativity and problem-solving. I enjoy
          taking on new challenges and continuously learning.
        </Text>
        <Text style={styles.heading}>My hobbies:</Text>
        <Text style={styles.listhead}>• Sports</Text>
        <Text style={styles.list}>
          I watched a lot of sports. Mostly Baseball, Football, and Basketball
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.sportsContainer}>
            <Image style={styles.pics} source={require('./Logo/mookie.jpg')} />
            <Image style={styles.pics} source={require('./Logo/hazard.jpg')} />
            <Image
              style={styles.pics}
              source={require('./Logo/bronbron.jpg')}
            />
            <Image style={styles.pics} source={require('./Logo/ohtani.jpg')} />
            <Image style={styles.pics} source={require('./Logo/drogba.jpg')} />
            <Image style={styles.pics} source={require('./Logo/AD.jpg')} />
          </View>
        </ScrollView>
        <Text style={styles.listhead}>• Games</Text>
        <Text style={styles.list}>I played a lot of JRPG games</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.sportsContainer}>
            <Image style={styles.pics} source={require('./Logo/ff8.jpg')} />
            <Image style={styles.pics} source={require('./Logo/p3.jpg')} />
            <Image style={styles.pics} source={require('./Logo/DQ3.jpg')} />
            <Image style={styles.pics} source={require('./Logo/DS.jpg')} />
            <Image style={styles.pics} source={require('./Logo/p4.jpg')} />
            <Image style={styles.pics} source={require('./Logo/ff7.jpg')} />
          </View>
        </ScrollView>
        <Text style={styles.p}>
          I'm always open to new connections! Feel free to message me!
        </Text>
        <Text style={styles.msg}>Send me a message!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Message"
          secureTextEntry={false}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <View style={styles.containerIcon}>
            <Image
              style={styles.icons}
              source={require('./Logo/instagram.png')}
            />
            <Image
              style={styles.icons}
              source={require('./Logo/Twitter.jpg')}
            />
            <Image
              style={styles.icons}
              source={require('./Logo/facebook.png')}
            />
          </View>
        </View>
      </View>
    </ScrollView>,
  ];
};

const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 80,
    marginTop: 10,
    padding: 25,
  },
  icons: {
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: 'purple',
    color: 'white',
    margin: 10,
    padding: 25,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#eab676',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: 'white',
  },
  msg: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 600,
  },
  main: {
    backgroundColor: '#ffff',
  },
  footer: {
    height: 100,
    width: '100%',
    backgroundColor: 'black',
  },
  input: {
    borderColor: 'black',
    borderWidth: 3,
    marginHorizontal: 20,
    fontSize: 35,
    borderRadius: 15,
    padding: 20,
    margin: 15,
    height: 100,
    textAlignVertical: 'top',
  },
  wrapper: {
    overflow: 'hidden',
    width: 410,
    height: 40,
    marginTop: 10,
  },
  line: {
    backgroundColor: '#063970',
    width: 410,
    height: 100,
    borderRadius: 20,
  },
  lines: {
    backgroundColor: 'blue',
    width: 1000,
    height: 5,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: '#f3f5f1',
  },
  backgroundImg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    top: 0,
    zIndex: -1,
    zIndex: -1,
  },
  subTitle: {
    fontSize: 35,
    fontWeight: '700',
    margin: 'auto',
    color: '#f3f5f1',
  },
  heading3: {
    fontSize: 30,
    fontWeight: 500,
    padding: 5,
    textAlign: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 500,
    padding: 5,
    marginLeft: 5,
  },
  listhead: {
    fontSize: 25,
    fontWeight: 500,
    padding: 5,
    marginLeft: 5,
  },
  list: {
    fontSize: 21,
    padding: 5,
    marginLeft: 5,
  },
  heading2: {
    fontSize: 45,
    fontWeight: 500,
    padding: 5,
    marginLeft: 50,
  },
  pics: {
    borderRadius: 10,
    width: 120,
    height: 240,
  },
  sportsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 15,
    padding: 10,
  },
  heading1: {
    fontSize: 40,
    fontWeight: 500,
    padding: 5,
    marginLeft: 10,
  },
  heading4: {
    fontSize: 35,
    fontWeight: 500,
    padding: 5,
    marginLeft: 30,
  },
  p: {
    padding: 10,
    fontSize: 21,
  },
  container: {
    backgroundColor: '#1e81b0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 25,
    padding: 10,
    boxShadow: '0px -15px #eab676',
  },
  imgContainer: {
    alignItems: 'center',
  },
  img: {
    borderRadius: 125,
    width: 250,
    height: 250,
    marginVertical: 20,
    elevation: 40,
    borderWidth: 2,
  },
  container2: {
    backgroundColor: 'white',
  },
});

// export default Exercise2;
