//  全局作用域 -- 全局变量
var abc = 123;

abcd = 2345;   // 全局作用域，但不是全局变量

{
  console.log(abc);
  console.log(window.abc);
  console.log(abcd);
  console.log(window.abcd);
}

function f() {
  console.log(abc);
  console.log(window.abc);
  console.log(abcd);
  console.log(window.abcd);
}

f();

  // 测试 变量 不能被删除，window全局变量，且定义为属性

console.log("----删除变量------")

console.log(delete abc);   // false
console.log(abc);

console.log("-----删除全局属性----")

console.log(delete abcd);
console.log(abcd);    // 已被删除，报 is not defined
