interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Joshua",
  lastName: "Benjamin",
  age: 22,
  location: "Alaska",
};

const student2: Student = {
  firstName: "Kelvin",
  lastName: "Hart",
  age: 18,
  location: "Morocco",
};

const studentsList: Student[] = [student1, student2];

studentsList.map(student => console.log(student.firstName, student.location));
