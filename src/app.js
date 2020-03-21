/**
 * 粽子
 */
class Preae {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

let yell = new Preae("粽子");
console.log(yell);
console.log(typeof yell);
