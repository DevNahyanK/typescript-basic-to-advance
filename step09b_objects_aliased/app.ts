// anonymous

let teacher: {name: string, exp: number} = {
    name: "Fahad",
    exp: 10

}

// Aliased Object Type
type student = {
    name: string,
    age?: number
}

let student: student = {
    name: "Ali",
    age: 22
}
console.log(student["name"])
console.log(student.age);


// Interfaces

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal"
}
