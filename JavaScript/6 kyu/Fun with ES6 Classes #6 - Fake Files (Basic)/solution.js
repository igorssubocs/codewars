// https://www.codewars.com/kata/5784c8116211383b5f0001d3

class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this.contents = contents;
    this._getsCount = 0;
    this._getcCount = 0;
  }
  get fullName() {
    return this._fullName;
  }
  get filename() {
   return this._fullName.split('.').slice(0, -1).join('.');
 }
  get extension() {
    return this._fullName.split('.').pop();
  }
  getContents() {
    return this.contents;
  }
  write(str) {
    this.contents += `${this.getContents() && '\n'}${str}`;
  }
  gets() {
    return this.contents.split('\n')[this._getsCount++];
  }
  getc() {
    return this.contents[this._getcCount++];
  }
}