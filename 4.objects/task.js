function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
};

Student.prototype.getAverage = function () {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < this.marks.length; i++) {
    count += 1;
    sum += this.marks[i];
  }
  console.log(sum / count);
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
// student1.addMark(5);
// student1.addMark(4);
// student1.addMark(5);
student1.addMarks(5, 4, 3, 4, 5);
student1.getAverage();
student1.exclude("low grades");
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
// student2.setSubject("Geometry");
// console.log(student2);
