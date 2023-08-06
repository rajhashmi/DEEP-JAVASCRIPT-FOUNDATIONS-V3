// var teacher = "shahid";
// console.log(teacher);

// teacher = "hashmi";
// Error: can't assign object to a string

// ====================================================================

type Student = {
    name: string;
};
 

function getName(studentRec: Student): string {
    return studentRec.name
}

let firstStudent: Student = {name : "shahid hashmi"};

let firstStudentName: string = getName(firstStudent);

