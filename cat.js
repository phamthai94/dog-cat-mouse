function Cat(name) {
    this.name = name;
    this.stomatch = []; 
    
}
Cat.prototype.eat = function (mouse){
    this.stomatch.push(mouse);
}
module.exports = Cat;