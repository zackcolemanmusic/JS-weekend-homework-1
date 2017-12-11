const Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
};

Hero.prototype.canTalk = function () {
    return `My name is ${this.name}`;
};

Hero.prototype.health = function(){
    return this.health;
};

Hero.prototype.favFood = function(){
  return this.favFood;
};

Hero.prototype.addTask = function(task){
  return this.tasks.push(task);
};





module.exports = Hero;
