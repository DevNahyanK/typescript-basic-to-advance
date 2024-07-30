interface Student {
    student_id: number;
    name: string;
  }
    
interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}
    
type intersected_type = Student & Teacher;
    
let obj1: intersected_type = {
    student_id: 3232,
    name: "john",
    teacher_Id: 7876,
    teacher_name: "Nadia",
};
    
console.log(obj1.teacher_Id);
console.log(obj1.name);