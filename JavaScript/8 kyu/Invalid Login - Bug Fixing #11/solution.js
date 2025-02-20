// Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!

// https://www.codewars.com/kata/55e4c52ad58df7509c00007e

function validate(username, password){
  const regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(username) || !regex.test(password)) {
        return 'Wrong username or password!';
  }
  
  var database = new Database();
  return database.login(username, password);
}