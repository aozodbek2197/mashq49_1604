// 1-mashq
console.log(Math.floor(Math.random()*10));
// 2-mashq
let s = "hello";
console.log(s.length);
// 3-mashq
let s = "hello";
let count = 0;
for(let c of s){
  if("aeiou".includes(c)) count++;
}
console.log(count);
// 4-mashq
let a = "Hello", b = "World";
console.log(a + " " + b);
// 5-mashq
let arr = [1,2,3,4];
let res = arr.filter(x=>x%2==0);
console.log(res);
