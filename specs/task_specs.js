const Hero = require('../hero.js');
const Task = require('../task.js');
const assert = require('assert');

describe('Tasks Tests', function(){

  it('Has difficulty level', function(){
    const task = new Task('hard', 3, 'cape');
    assert.strictEqual(task.difficulty, 'hard');
  });

  it('Has urgency level', function(){
    const task = new Task('hard', 3, 'cape');
    assert.strictEqual(task.urgency, 3);
  });

  it('Has a reward', function(){
    const task = new Task('hard', 3, 'cape');
    assert.strictEqual(task.reward, 'cape');
  });

  it('Should be completed', function(){
    const task = new Task('hard', 3, 'cape');
    task.completed = true;
    assert.strictEqual(task.completed, true);
  });



});
