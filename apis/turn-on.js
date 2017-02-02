var wol = require('node-wol');

wol.wake('30:A9:DE:E5:28:4C', {
  address: '10.0.1.200',
  port: 3000
}, function(error) {
  if(error) {
    // handle error
    return;
  }
});
//
// wol.wake('30:A9:DE:E5:28:4C', function(error) {
//   if(error) {
//     console.log(error);
//     return;
//   }
//
// });

var magicPacket = wol.createMagicPacket('30:A9:DE:E5:28:4C');
