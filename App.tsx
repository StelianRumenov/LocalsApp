import React from 'react';
import TestComponent from './components/test';
import {SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>
          <TestComponent />
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
  wrapper: {
    flex: 1,
  },
});

export default App;
