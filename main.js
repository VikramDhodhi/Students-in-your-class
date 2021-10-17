var names = [];

function submit() {
    var students = [];
    for (var i = 1; i <= 4; i++) {
        namex = document.getElementById("name_of_the_student_" + i).value;
        console.log(namex);
        names.push(namex);

    }
    console.log(names);
    var arraylength = names.length;
    for (j = 0; j < arraylength; j++) {
        students.push("<h4> name- " + names[j] + "</h4>");
        console.log(students);
    }
    document.getElementById("display_name_with_commas").innerHTML=students;
    var rc=students.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=rc;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    names.sort();
    arraylength=names.length;
    var students=[];
    for (j = 0; j < arraylength; j++) {
        students.push("<h4> name- " + names[j] + "</h4>");
        console.log(students);
    }
    var rc=students.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=rc;
 
}