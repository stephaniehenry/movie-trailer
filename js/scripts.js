console.log('OK');

//Initialize Player//
const player = new Plyr( '#player', {

    controls: [ 'play', 'current-time', 'progress' ],
  
    keyboard: { focused: true, global: true },
  
    seekTime: 30,
  
});
