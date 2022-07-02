function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}
Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((sum, current, index, array) => sum + current / array.length, 0);
}

Array.prototype.mysort = function () {
    let arr = this;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log([7, 5, 2, 4, 3, 9].mysort());

const stu1 = new Student('John', 'Smith');
stu1.inputNewGrade(88);
stu1.inputNewGrade(98);
stu1.inputNewGrade(86);
stu1.inputNewGrade(80);

const stu2 = new Student('John2', 'Smith2');
stu2.inputNewGrade(85);
stu2.inputNewGrade(95);
stu2.inputNewGrade(85);
stu2.inputNewGrade(70);

const students = [stu1, stu2];

const result = students.reduce((average, stu, index, array) => average + stu.computeAverageGrade() / array.length, 0);
console.log(result);