import React from 'react';
import { Image } from 'react-native-scalable-image';

// Import the local image file
const localImage = require('./image.jpg');

function App() {
  return (
    <Image
      source={localImage}
      style={{width: 200, height: 200}}
      backgroundColor="transparent"
    />
  );
}

export default App;
