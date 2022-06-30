
let employees = [];
let done =[];
let selectedIndex = -1;


function addEmployee(){

    let firstName = document.getElementById("first-name").value;
    let age = document.getElementById("age").value;
    let position = document.getElementById("position").value;
    let salary = document.getElementById("salary").value;



    document.getElementById("first-name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("position").value = "";
    document.getElementById("salary").value = "";

    let newEmployee = {
        firstName: firstName,
        age: age,
        position: position,
        salary: salary,

    }


    if (selectedIndex >= 0){
        employees[selectedIndex] = newEmployee;
        selectedIndex = -1;
    } else {

        employees.push(newEmployee);
    }

    drawPage();
    progress();
}


function drawPage(){
    let result = "";

    for (let i = 0; i < employees.length; i++){
        result +=
            "<div class='col-12 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'>" +
            "<h3 class='text-success text-center'>"+ employees[i].firstName + "</h3>" +
            "</div>" +
            "<div class='card-body'>" +
            "<p>Age: <b>"+ employees[i].age +"</b></p>" +
            "<p>Position: <b>"+ employees[i].position +"</b></p>" +
            "<p>Salary: <b>"+ employees[i].salary +" $</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-primary mr-5'  onclick='editEmployee("+ i +")' data-target='#modal' data-toggle='modal'>Edit</button>" +
            " <button type='button' class='btn btn-success ' onclick='editList("+ i +")'>Ishga qabul qilindi</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;

    let result1 = "";
    for (let i = 0;  i < done.length; i++){
        result1 +=
            "<div class='col-6 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'>" +
            "<h3 class='text-success text-center'>"+ done[i].firstName + "</h3>" +
            "</div>" +
            "<div class='card-body'>" +
            "<p>Position: <b>"+ done[i].position +"</b></p>" +
            "<p>Salary: <b>"+ done[i].salary +" $</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-danger' onclick='deleteEmployee("+ i +")'>Ishdan bo'shatildi!</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result1").innerHTML = result1;
}


function deleteEmployee(index){
    done.splice(index, 1);
    drawPage();
    progress();
}


function editEmployee(index){
    document.getElementById("first-name").value = employees[index].firstName;
    document.getElementById("age").value = employees[index].age;
    document.getElementById("position").value = employees[index].position;
    document.getElementById("salary").value = employees[index].salary;

    selectedIndex = index;
}

function  editList(index) {
    done.push(employees[index]);
    employees.splice(index, 1);
    drawPage();
    progress();

}

function progress() {
    let  precent =done.length * 100 / (done.length + employees.length);
    document.getElementById("progress").style.width = precent + "%";
}