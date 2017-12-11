const Food = function(name, replenishment){
  this.name = name;
  this.replenishment = replenishment;
};

Food.prototype.name = function(){
  return this.name;
};

Food.prototype.replenishment = function(){
  return this.replenishment;
};

module.exports = Food;
