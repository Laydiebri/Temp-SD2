"use strict"
class Student {
    code;
    student_name;
    
    constructor(code, student_name){

        this.code = code;
        this.student_name = student_name;
    }
}

var  Students = [
    new Student ("001","Zabrina Osborne"),
    new Student ("002", "Michelle Osborne"),
    new Student ("003","Clayton Osborne")];

function printStudent(){
    var text = "";
    for (var student of students){
        text = text + student.code + ": " + student.student_name + "<br>";
    }

    var main = document.getElementById("main");
    main.innerHTML =text;
}