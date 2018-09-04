var foo = 123;
console.log(foo);

var foo = 3;
var bar = 5;

console.log(foo + 1);
console.log(foo / bar);
console.log(foo * bar);
console.log(foo - bar);
console.log(foo % 2);

var foo = true;
console.log(true);
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);

var foo = [];
foo.push(1);
console.log(foo);
foo.unshift(2);
console.log(foo);
console.log(foo[0]);

var foo = {};
console.log(foo);
foo.bar = 123;
console.log(foo);
var foo = {
    bar: 123
};
console.log(foo);

var foo = {
    bar: 123,
    bas: {
        bas1:'some string',
        bas2: 345
    }
};
console.log(foo);


var foo = {
    bar: 123,
    bas: [1,2,3]
};
console.log(foo);


var foo = {
    bar: 123,
    bas: [
        { qux: 1 }, { qux: 2 }, { qux: 3 }
    ]
};
console.log(foo);
console.log(foo.bar);
console.log(foo.bas[0].qux);
console.log(foo.bas[2].qux);

