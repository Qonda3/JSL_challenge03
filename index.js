
const firstName = 'John';
const age = 35;
const hobby = 'Coding';
//Qonda
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

function hobbyFunc () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

hobbyFunc();