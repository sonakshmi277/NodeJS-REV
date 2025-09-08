const m=require("./way2");
const n=require("./way1");
console.log(m.a(1,2));
console.log(m.sub(1,2));
console.log(n(3,6));


OR

const {a,sub}=require("./way2");
console.log(a(1,2));
console.log(sub(11,2));