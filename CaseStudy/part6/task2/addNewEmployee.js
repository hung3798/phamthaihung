let arrListEmployee = [];

function addNewEmployee() {
    var employee = new Employee();
    employee.setNameEmployee(prompt("Enter Name Employee:"));
    employee.setIdCard(prompt("Enter Id Card Employee:"));
    employee.setBirthdayEmployee(checkBirthDay(prompt("Enter Birthday Employee (dd/MM/YYYY):")));
    employee.setEmailEmployee(checkEmail(prompt("Enter email Employee:")));
    employee.setPhoneNumber(prompt("Enter Phone Number Employee:"));
    employee.setEducationBackground(prompt("Enter Education Background Employee:"));
    employee.setPosition(prompt("Enter Position"));
    employee.setSalary(prompt("Enter salary:"));

    arrListEmployee.push(employee);
    displayMainMenu();
}
function checkBirthDay(birthDay) {
    regexp = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[6-9][0-9]|200[0-9])$/;
    if (regexp.test(birthDay)) {
        alert("Ngay sinh hop le");

    } else {
        alert("Ngay sinh khong hop le, vui long nhap lai!!!");
        checkBirthDay();
    }
    return birthDay ;
}

function checkEmail(email) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(email)) {
        alert("Email hop le");
        return email;
    } else {
        alert("Email khong hop le, vui long nhap lai!!!");
        checkEmail();
        return email;
    }
}

