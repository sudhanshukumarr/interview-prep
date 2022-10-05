var counter = require('./export-import');
let c1 = counter[0];

console.log(c1(['shaun','crystal','ryu']));
console.log(counter[1](['x','y','z','zz','yy',]));

console.log(counter[0]);
console.log(counter[1]);
