lgtv = require("lgtv");
/*---------------------------------------------------------------------------*/
var retry_timeout = 10;
var run_test = function() {
        console.log("Found TV at address running example.");
        lgtv.connect('10.0.1.200', function(err, response){
          if (!err) {
            // lgtv.set_input("HDMI_1", function(err, response){
            //   if (!err) {
            //     lgtv.set_volume(2, function(err, response){
            //       lgtv.disconnect();
            //     });
            //   }
            // });
            lgtv.set_volume(2, function(err, response){
              lgtv.disconnect();
            });
          }
        });
};

run_test();
