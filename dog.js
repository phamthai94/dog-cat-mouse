var chalk = require('chalk');


function Dog(name){
    this.name = name;
    this.stomatch = [];
}
Dog.prototype.eat = function(cat){
    this.stomatch.push(cat)
}
Dog.prototype.sayHi = function(){
    console.log('Hi ! i am a dog, my name is '+ chalk.magenta.bold.italic(this.name))
}
module.exports = Dog;