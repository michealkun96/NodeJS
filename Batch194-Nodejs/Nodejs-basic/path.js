const path = require('node:path');
//basename ? 
// return the last portion of a path
const filename = path.basename('/Users/Refsnes/demo_path.js');
console.log(filename);
// extract file info ==> path.parse
const fileinfo = path.parse('/Users/Refsnes/demo_path.js');
console.log('<<=== Fileinfo ===>>',fileinfo);
// rename file ==> file-timestemp.txt
const newfilename = path.parse('/Users/Refsnes/demo_path.js');
console.log('<<=== Fileinfo ===>>',fileinfo);