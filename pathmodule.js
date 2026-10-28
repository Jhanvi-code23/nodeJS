const path = require("path") //yeh path module ko import kr rha hai
const a = path.basename("C:/Users/Jhanvi/OneDrive/Desktop/NodeJs/pathmodule.js") //yeh file ka name show kr rha hai
console.log(a)
console.log(path.dirname("C:/Users/Jhanvi/OneDrive/Desktop/NodeJs/pathmodule.js")) //yeh file ka directory show kr rha hai
console.log(path.extname("C:/Users/Jhanvi/OneDrive/Desktop/NodeJs/pathmodule.js")) //yeh file ka extension show kr rha hai
console.log(path.parse("C:/Users/Jhanvi/OneDrive/Desktop/NodeJs/pathmodule.js")) //yeh file ka object show kr rha hai