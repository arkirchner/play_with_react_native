import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { GameEngine } from 'react-native-game-engine';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default function App() {
  return (
    <GameEngine style={styles.container}>
      <StatusBar hidden />
    </GameEngine>
  );
}
