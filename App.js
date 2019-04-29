import React from 'react';
import { Dimensions, StyleSheet, StatusBar } from 'react-native';
import Matter from 'matter-js';
import { GameEngine } from 'react-native-game-engine';
import Box from './Box';

const { width, height } = Dimensions.get('screen');
const boxSize = Math.trunc(Math.max(width, height) * 0.075);
// const engine = Matter.Engine.create({ enableSleeping: false });
// const world = engine.world;
const initialBox = Matter.Bodies.rectangle(width / 2, height / 2, boxSize, boxSize);
const floor = Matter.Bodies.rectangle(width / 2, height - boxSize / 2, width, boxSize, {
  isStatic: true
});
// Matter.World.add(world, [initialBox, floor]);

// const Physics = (entities, { time }) => {
//   let engine = entities['physics'].engine;
//   Matter.Engine.update(engine, time.delta);
//   return entities;
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default class App extends React.Component {
  render() {
    return (
      <GameEngine
        style={styles.container}
        //        systems={[Physics]}
        entities={{
          //         physics: { engine: engine, world: world },
          floor: { body: floor, size: [width, boxSize], color: 'green', renderer: Box },
          initialBox: { body: initialBox, size: [boxSize, boxSize], color: 'red', renderer: Box }
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}
