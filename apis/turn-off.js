lgtv = require("lgtv");
/*---------------------------------------------------------------------------*/
var retry_timeout = 10;
var run_test = function() {
  lgtv.connect('10.0.1.200', function(err, response){
    lgtv.turn_off(function(err, response){
      if (!err) {
        console.log("turn_off succeeded:" + JSON.stringify(response));
      } else {
        console.log("turn_off failed:" + JSON.stringify(response));
      }
      lgtv.disconnect();
    });
  });
};

run_test();
