const Hero = require('../hero.js');
const Task = require('../task.js')
const assert = require('assert');


describe('Hero Tests', function(){

  it('Hero has name and can talk', function(){
    const hero = new Hero('Superdog', 100, "mac n' Cheese");
    assert.strictEqual(hero.canTalk(), 'My name is Superdog');
  });

  it('Hero has health', function(){
    const hero = new Hero('Superdog', 100, "mac n' Cheese");
    assert.strictEqual(hero.health, 100);
  });

  it('Has favourite food', function(){
    const hero = new Hero('Superdog', 100, "mac n' Cheese");
    assert.strictEqual(hero.favFood, "mac n' Cheese");
  });

  it('Has tasks to complete', function(){
    const hero = new Hero('Superdog', 100, "mac n' Cheese");
    const task = new Task('Walk the cat');
    hero.addTask(task);
    assert.strictEqual(hero.tasks.length, 1);
  });


});
