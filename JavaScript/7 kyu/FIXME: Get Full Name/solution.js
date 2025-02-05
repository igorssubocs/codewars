// Fix the bug so we can all go home early.

// https://www.codewars.com/kata/597c684822bc9388f600010f

class Dinglemouse{
    
  constructor( firstName, lastName ){
    this.firstName = firstName || '';
    this.lastName = lastName || '';
  }
  
  getFullName(){
    if (this.firstName && this.lastName) return `${this.firstName} ${this.lastName}`;
    else return this.firstName || this.lastName || '';
  }
  
}