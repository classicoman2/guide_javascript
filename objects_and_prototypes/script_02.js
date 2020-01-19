
var cadena = new String();
console.log(cadena)

//Object with no constructor
const myobj = {
    prop1: 5,
    prop2: false,
    prop3: "this is a string",
    get_prop1: function () {
        return this.prop1;
    },
    set_prop1: function (value) {
        this.prop1 = value
    }
}
console.log(myobj);

/* When we assign an object to another, they reference the same space in memory */
myobj2 = myobj
myobj2.prop1 = 13;
console.log(myobj);

/* Now let's use a constructor */
//Object with no constructor
myobj_constr = function (prop1, prop2, prop3) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.prop3 = prop3;
    this.get_prop1 = function () {
        return this.prop1;
    },
        this.set_prop1 = function (value) {
            this.prop1 = value
        }
}

myobj_c = new myobj_constr(10, true, "using constructor")

console.log(myobj_c);