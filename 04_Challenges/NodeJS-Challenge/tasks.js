/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  let firstWord = text.split(" ")[0];
  let secondWord = text.split(" ")[1];

  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (firstWord === "hello\n") {
    hello();
  } else if (firstWord === "hello" && secondWord) {
    secondHello(secondWord);
  } else if (firstWord === "add" && secondWord) {
    addOption(secondWord);
  } else if (text === "help\n") {
    help();
  } else if (firstWord === "remove\n") {
    FirstRemove();
  } else if (firstWord === "remove" || secondWord === 1) {
    SecondRemove();
  } else if (firstWord === "remove" || secondWord === 2) {
    ThirdRemove();
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello() {
  console.log(`Hello!`);
}

function secondHello(secondWord) {
  console.log(`Hello ${secondWord}`);
}

var list = ["eat", "sleep", "code"];

function addOption(secondWord) {
  list.push(secondWord.trim());
  console.log(list);
}
function FirstRemove() {
  list.pop();
  console.log(list);
}
function SecondRemove() {
  list.splice(0,1);
  console.log(list);
}
function ThirdRemove() {
  list.splice(1,1);
  console.log(list);
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}
// help command to help the user
const helps = ["hello for greating", "exit and quit for exiting","list to show the arrays", "add for adding new element to array", "remove" ,"remove 1" ,"remove 2"];

function help() {
  console.log(helps);
}

function hellox(name) {
  console.log(`Hello ${name}`);
}

// The following line starts the application
startApp("Faysal Sardouk");
