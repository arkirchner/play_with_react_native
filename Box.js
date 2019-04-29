import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default function Box(props) {
  console.log(props);

  const {
    size: [width, height],
    body: {
      position: { x, y }
    },
    color
  } = props;

  const left = x - width / 2;
  const top = y - height / 2;

  return (
    <View
      style={{
        position: 'absolute',
        left,
        top,
        width,
        height,
        backgroundColor: color || 'pink'
      }}
    />
  );
}

Box.propTypes = {
  size: PropTypes.arrayOf(PropTypes.number).isRequired,
  body: PropTypes.object.isRequired,
  color: PropTypes.string
};
