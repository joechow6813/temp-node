const _=require("lodash")

const items=[1,[2,[3,[4]]]]
const newitem=_.flattenDeep(items)
console.log(newitem)
console.log("hello people")