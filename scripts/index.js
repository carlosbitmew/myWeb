'use strict';
var obj = {
    name: 'carlos',
    age: 12,
    'c-a': 'aa'
}
console.log(obj.name);
obj["c-a"]

var arr = [1, 2, 3, 4, 5, 6];
arr.name = 'array';
for (var x in arr) {
    console.log(x);
}
//for in 会循环.name之类的元素
for (var x of arr) {
    console.log(x);
}

//forEach 的使用
var map = [[0, 1], [2, 3]];
map.forEach(function (value, index, array) {
    console.log('value is : ' + value + '  index is : ' + index + '  array is : ' + array);
})
function add(value, index, array) {
    console.log('value is : ' + value + '  index is : ' + index + '  array is : ' + array);
}

//rest
function sum(...rest) {
    var result = 0;
    for (var i of rest) {
        result += i;
    }
    return result;
}
console.log(sum(1, 2, 3, 4));

//argument
function foo(x) {
    console.log('argment.length = ' + arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
foo(10, 0, 20);

//方法
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function() {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
console.log(xiaoming.age());