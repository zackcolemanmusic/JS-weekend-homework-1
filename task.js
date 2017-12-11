const Task = function(difficulty, urgency, reward){
    this.difficulty = difficulty;
    this.urgency = urgency;
    this.reward = reward;
    this.taskCompleted = false;
};


Task.prototype.difficulty = function(){
  return this.difficulty;
};

Task.prototype.urgency = function(){
  return this.urgency;
};

Task.prototype.reward = function(){
  return this.reward;
};



module.exports = Task;
