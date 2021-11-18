// Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
    //return this.state;
  }

  set improveState(number) {
    if (number < 0) {
      this.state = 0;
    } else if (number > 100) {
      this.state = 100;
    } else {
      this.state = number;
    }
  }

  get improveState() {
    return this._improveState;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

// console.log(picknick.author);
// picknick.state = 10;
// picknick.fix();
// console.log(picknick.state);

// Задача 2
class Library {
  constructor(name) {
    this.name = "name";
    this.books = [];
  }

  addBook(book) {
    if (this.state > 30) {
      this.books = this.books.push(book);
    }
  }

  findBookBy(type, value) {
    this.books.find(value); // ??????
  }

  giveBookByName(bookName) {
    if (this.books.find(bookName) === true) {
      delete this.books[bookName];
      return this.books[bookName];
    } else return null;
  }
}

// Задача 3

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  setSubject(subjectName) {
    this.subject = subjectName;
  }

  addMark(mark) {
    if (this.marks === undefined) {
      this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
  }

  addMarks(...marks) {
    if (this.marks === undefined) {
      this.marks = [...marks];
    } else {
      this.marks.push(...marks);
    }
  }

  getAverage() {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < this.marks.length; i++) {
      count += 1;
      sum += this.marks[i];
    }
    console.log(sum / count);
  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }

  addGrade(grade, subject) {
    if (this.objWithJornals === undefined) {
      this.objWithJornals = {
        jornalAlgebra: [],
        jornalGeometry: [],
      };
    }

    if (grade < 1 && grade >= 6) {
      return "Ошибка, оценка должна быть числом от 1 до 5";
    }

    if (subject === "algebra") {
      this.objWithJornals.jornalAlgebra.push(grade);
      return this.objWithJornals.jornalAlgebra;
    }

    if (subject === "geometry") {
      this.objWithJornals.jornalGeometry.push(grade);
      return this.objWithJornals.jornalGeometry;
    }
  }
}

let student1 = new Student("Tony", "male", 37);
// student1.setSubject("Algebra");
// student1.addMark(5);
// student1.addMark(4);
// student1.addMark(5);
//student1.addMarks(5, 4, 3, 4, 5);
//student1.getAverage();
//student1.exclude('low grades')
student1.addGrade(4, "algebra");
student1.addGrade(6, "algebra");
student1.addGrade(5, "geometry");
console.log(student1);

let student2 = new Student("Buzz", "female", 35);
// student2.setSubject("Geometry");
// console.log(student2);
