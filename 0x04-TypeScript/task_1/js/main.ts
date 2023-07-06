interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [x: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Prints the name of a teacher
 */
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName[0]}. ${lastName}`;
};

interface IStudentClassConstructor {
  (firstName: string, lastName: string): void;
}

interface IStudentClass {
  firstName: string
  lastName: string
  // constructor: IStudentClassConstructor;
  workOnHomework: () => string
  displayName: () => string
}

class StudentClass implements IStudentClass {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  workOnHomework = () => {
    return "Currently working"
  }

  displayName = () => {
    return this.firstName
  }

}
