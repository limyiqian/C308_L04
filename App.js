/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import moment from 'moment-timezone';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Welcome = () => {
  return <Text>Welcome to C308 Web Frameworks!</Text>;
};
const MyFirstApp = () => {
  return <Text>My first React Native app</Text>;
};
// const setModule = (props) => {
//   return (
//     <Text>
//       {props.day} - {props.module}
//     </Text>
//   );
// };

class SetModule extends React.Component{
  render() {
    return (
        <Text>
          {this.props.day} - {this.props.module}
        </Text>
    );
  }
}

class Eats extends React.Component{
  render() {
    return (
        <Text>
          {this.props.name}{'\n'}
          {this.props.location}{'\n'}
        </Text>
    );
  }
}

class Clock extends React.Component {
  render() {
    var now = moment.timeZone();
    var timezone = moment.tz(now, this.props.location).format();
    return <Text>{this.props.location} + {timezone} </Text>;
  }
}

const WorldClock = () => {
  return (
    <View>
      <Clock location={'Asia/Singapore'} />,
      <Clock location={'Europe/London'} />,
      <Clock location={'America/New_York'} />,
      <Clock location={'Europe/Oslo'} />
    </View>
  );
};

const App: () => React$Node = () => {
  console.log("Hi");
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome />
              <MyFirstApp />
              <Text>{'\n'}My modules this semester:</Text>
              <SetModule day="Monday" module="C348"/>
              <SetModule day="Tuesday" module="C273"/>
              <SetModule day="Friday" module="C308"/>
              <Text>{'\n'}Recommended Eats @ RP</Text>
              <Eats name={"Sweet Tooth Waffles"} location={"W6 Level 1, E-canteen"}/>
              <Eats name={'Crowded Bowl'} location={'W4/W6 Lawn Canteen'} />
              <Eats name={"Western Cruisine @ Koufu"} location={"E1 Level 1, Koufu"}/>
              <Eats name={'Ayam Penyet'} location={'W4/W6 Lawn Canteen'} />
              <Text>{'n'}World Clock</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
