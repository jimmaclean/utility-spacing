console.log('started');

var compiled = _.template('hello <%= user %>!');
compiled({ 'user': 'fred' });