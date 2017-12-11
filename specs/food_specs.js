const Hero = require('../hero.js');
const Task = require('../task.js');
const Food = require('../food.js');
const assert = require('assert');

describe('Food Tests', function(){

  it('Should have name', function(){
    const food = new Food('steak', 50);
    assert.strictEqual(food.name, 'steak');
  });

  it('Should have replenishment', function(){
    const food = new Food('steak', 50);
    assert.strictEqual(food.replenishment, 50);
  });


});
