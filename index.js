const removeBg = require('remove.bg');

removeBg.apiKey = 'RT1QdU9hA1vytrc22JL5GBrk';

removeBg.removeBackgroundFromImage('image.jpg', 'output.png', (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
