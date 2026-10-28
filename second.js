// function(exports, require, module, __filename, __dirname) {} //WRAPPPER FUNCTION

//COMMON JS MODULE SYSTEM
jhanvi = {
    name: "Jhanvi",
    age: 20,
    developer: true
} //object bna liya ek aur ab isse main index.js mein import krna chahti hu
console.log(exports, require, module, __filename, __dirname) //yeh 5 cheezein automatically available hoti hai har file mein
module.exports = jhanvi;

