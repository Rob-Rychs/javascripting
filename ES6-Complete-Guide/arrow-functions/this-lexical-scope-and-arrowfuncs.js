// the following returns a TypeError: Cannot read property 'teamName' of undefined
// const team = {
//  members: ['Jane', 'Bill'],
//  teamName: 'Super Squad',
//  teamSummary: function() {
//    return this.members.map(function(member) {
//      return `${member} is on team ${this.teamName}`;
//    });
//  }
//};


// couple of ways to solve error:
// 1. using es5 bind helper
const team1 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(function(member) {
      return `${member} is on team ${this.teamName}`;
    }.bind(this));
  }
};

// assigning this to a variable 'self' and referring to that variable
const team2 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    var self = this;
    return this.members.map(function(member) {
      return `${member} is on team ${self.teamName}`;
    });
  }
};

// using an es6 arrow function
const team3 = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};
team1.teamSummary();
team2.teamSummary();
team3.teamSummary();