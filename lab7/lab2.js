/*
With Arrow function
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student)=> {
            console.log(this.title + ": " + student
            );
        });
    }
};
group.showList();
*/
// With bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};
group.showList();
