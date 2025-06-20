// dummy promise class

class Promise2 {
  constructor(fn) {
    this.fn = fn;
    this.fn(() => {
      this.resolves.forEach((fn) => fn());
    });
  }
  then(fn) {
    if (!this.resolves) {
      this.resolves = [];
    }
    this.resolves.push(fn);
  }
}
