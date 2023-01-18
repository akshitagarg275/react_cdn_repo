// function x() {
//     const a = 10;
// }

// console.log(this)

// const obj = {
//     fn : function(){
//         console.log(this)
//     },
//     fn2 : () => {
//         console.log(this)
//     }
// }
// obj.fn()
// obj.fn2()

const obj = {
    firstName: "Akshay",
    printName : () => {
        console.log(this)
    },
    printName2 : function (){
        console.log(this)
    }
}

const obj2 = {
    firstName: "Simran"
}

// obj.printName()
// obj.printName2()

obj.printName.call()
obj.printName2.call(obj2)