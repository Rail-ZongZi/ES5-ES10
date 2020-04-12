// let 、 const 、 var

{
  let a = 123;
  console.log(a);
}
// console.log(a);   // is not defined

let b = 456;
var c = 789;

// 不同读取 let 和 var 没区别
console.log(b);
console.log(c);

// window 的全局属性读取不能进行访问  区别点   &&  let 不能重复定义  && let 定义变量无 变量提升
console.log(window.b);   // undefined
console.log(window.c);

