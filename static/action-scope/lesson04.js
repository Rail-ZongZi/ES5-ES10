// 动态作用域

window.a = 123;
function test() {
  console.log(this.a);
}
test();
test.bind({a: 200})();   // 改变this指向

