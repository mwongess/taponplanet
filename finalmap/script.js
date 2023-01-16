// "use strict"

// const person = {
//     fname: 'Amos',
//     lname: 'Mwongela',
//     get fullname(){
//         return this.fname + " " + this.lname
//     },
//     fllname: function(){
//         return this.fname + " " + this.lname
//     }
// }

// console.log(person.fllname())

class person {
    constructor(fname, lname, year){
        this.fname = fname
        this.lname = lname
        this.year = year
    }
    get Age(){
        let date = new Date()
        return date.getFullYear() - this.year;
    }
}

const person1 = new person("Amos", "Mwongela", 2001)

console.log(person1.Age)
