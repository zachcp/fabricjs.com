var exec = require('child_process').exec;
var command = 'jsdoc-3.2.0/jsdoc lib/fabric.js README.md -d docs';

console.log('Running:', command);

var start = new Date();
exec(command, function (error, output) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(output);
    console.log('Completed in ', (new Date() - start) / 1000 + 's');
  }
});
