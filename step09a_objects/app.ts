let teacher = {
    name: "Nahyan",
    experience: "6"
}
console.log(teacher.name);
console.log(teacher["experience"]);

//Type Declartion
let student : {
    name: string,
    age: number,
}

student = {
    name: "Nahyan",
    age: 22
}
console.log(student["name"]);
console.log(student.age);