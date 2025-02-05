// https://www.codewars.com/kata/5550d638a99ddb113e0000a2

function josephus(items,k){
  let result = [];
  let s = 0;
  
  while (items.length > 0) {
    s = (s + k - 1) % items.length;
    result.push(items[s]);
    items.splice(s, 1);
  }
  return result;
}