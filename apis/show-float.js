lgtv = require("lgtv");
/*---------------------------------------------------------------------------*/
var retry_timeout = 10;
var run_test = function() {
        lgtv.connect('10.0.1.200', function(err, response){
          if (!err) {
            lgtv.show_float("שאולזקי", function(err, response){
              if (!err) {
                lgtv.disconnect();
              }
            }); // show float
          }
        });
};

run_test();
