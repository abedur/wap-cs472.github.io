// function askPassword(ok, fail){
//     let password = prompt("Password?", '');
//     if(password == "rockstar") ok();
//     else fail();
// }
// let user = {
//     name:'John',
//     loginOK(){
//         alert(`${this.name} logged in`);
//     },

//     loginFail(){
//         alert(`${this.name} failed to login`);
//     }
// }

//askPassword(function(){user.loginOK()} , function(){user.loginFail()} );

// askPassword(user.loginOK.bind(user), user.loginFail.bind(user));
/*
askPassword(()=>{user.loginOK()} , ()=>{user.loginFail()} );


let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach( (student) => {
            console.log(this.title + ": " + student);
        });
    }
};
group.showList();
*/

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        let ob = this;
        ob.students.forEach( function(student) {
            console.log(ob.title + ": " + student);
        });
    }
};
group.showList();