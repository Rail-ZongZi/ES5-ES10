// 函数作用域 (局部作用域)

function fn() {
 abc = 345;   // 全局作用域
}
fn();
console.log(abc);

function text() {
  var a = 89;
  return a + 1;
}

console.log(text());
// console.log(a);   // is not defined


// 如果 a 被共享出外部进行使用时， 采用return 和闭包形式进行共享


// ====利用作用域链进行查找外部变量====

var c = 26;
function ais() {
  var a = 13;
  function ais1() {
    var b = 11;
    function ais2() {
      return a + b + c;
    }
    return ais2();
  }
  return ais1();
}

console.log(ais());
