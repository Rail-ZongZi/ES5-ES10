// 块级作用域

function test() {
  var abc = 12;
  // return abc + 13;   // return 以后就直接调出代码块执行
  if (abc === 12) {
    var b = 45;    // let b = 45;   // 设置 ES6 的块级作用域
    console.log("打印成功...");
  } else {
  console.log("打印失败!!!");
  }
  console.log(b);
  return abc + 13;
}

console.log(test());
