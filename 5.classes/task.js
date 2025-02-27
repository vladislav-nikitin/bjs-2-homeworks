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
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}

// const sherlock = new PrintEditionItem(
//   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//   2019,
//   1008
// );
// console.log(sherlock.releaseDate);
// console.log(sherlock.state);
// sherlock.fix();
// console.log(sherlock.state);

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
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

// const picknick = new FantasticBook(
//   "Аркадий и Борис Стругацкие",
//   "Пикник на обочине",
//   1972,
//   168
// );

// console.log(picknick.author);
// console.log(picknick.name);
// console.log(picknick.releaseDate);
// console.log(picknick.pagesCount);
// picknick.state = 10;
// picknick.fix();
// console.log(picknick.state);

// Задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        let founded = this.books[i];
        this.books.splice(founded, 1);
        return founded;
      }
    }
    return null;
  }
}

const library = new Library("Библиотека имени Ленина");
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

//console.log(library.findBookBy("name", "Властелин колец"));
//console.log(library.findBookBy("releaseDate", 1924));
// console.log("Количество книг до выдачи: " + library.books.length);
// library.giveBookByName("Машина времени");
// console.log(library.books)

// Задача 3

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  // setSubject(subjectName) {
  //   this.subject = subjectName;
  // }

  addMark(mark, subject) {
    if (mark < 1 || mark >= 6) {
      throw new Error("Ошибка, оценка должна быть числом от 1 до 5");
    } else if (this.marks[subject] === undefined) {
      this.marks[subject] = [mark];
    } else {
      this.marks[subject].push(mark);
    }
  }

  // addMarks(...marks) {
  //   if (this.marks === undefined) {
  //     this.marks = [...marks];
  //   } else {
  //     this.marks.push(...marks);
  //   }
  // };

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined) {
      throw new Error("Несуществующий предмет");
    }
    let sum = 0;
    let count = 0;
    for (let i = 0; i < this.marks[subject].length; i++) {
      count += 1;
      sum += this.marks[subject][i];
    }
    console.log(`Средний балл по предмету ${subject} ${sum / count}`);
  }

  getAverage() {
    let marksValues = Object.values(this.marks);
    let unitedArray = marksValues.flat();
    let sum = 0;
    let count = 0;
    for (let i = 0; i < unitedArray.length; i++) {
      count += 1;
      sum += unitedArray[i];
    }
    console.log(`Средний балл по всем предметам ${sum / count}`);
  }

  exclude(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
}

let student1 = new Student("Tony", "male", 37);
student1.addMark(5, "algebra");
student1.addMark(5, "algebra");
student1.addMark(5, "geometry");
student1.addMark(4, "geometry");
//student1.addMarks(5, 4, 3, 4, 5);
student1.getAverageBySubject("algebra");
student1.getAverage();
//student1.exclude('low grades')
//console.log(student1);
