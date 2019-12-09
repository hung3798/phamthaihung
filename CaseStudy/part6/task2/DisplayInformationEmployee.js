
function displayInformationEmployee (){
    choose = prompt("Chọn nhân viên muốn hiển thị \n" + get2InforEmployee() + arrListEmployee.length + ".Back");
    switch (choose) {
        case (arrListEmployee.length) + "":
            displayMainMenu();
            break;
        default:
            displayEmployee(choose);
    }
    displayMainMenu();
}

function get2InforEmployee() {
    let result = "";
    for (i = 0; i < arrListEmployee.length; i++) {
        result += "Số thứ tự:" + " " + i + "\n"
            + "0.Name:" + " " + arrListEmployee[i].getNameEmployee() + "\n"
            + "1.ID Card" + " " + arrListEmployee[i].getIdCard() + "\n"
            + "============================\n";
    }
    return result;
}

function displayEmployee(index) {
    alert(getInformationEmployee(index));
}

function getInformationEmployee(index) {
    return "0. Name: " + " " + arrListEmployee[index].getNameEmployee() + "\n"
        + "1. ID Card: " + " " + arrListEmployee[index].getIdCard() + "\n"
        + "2. Birthday: " + " " + arrListEmployee[index].getBirthdayEmployee() + "\n"
        + "3. Email: " + " " + arrListEmployee[index].getEmailEmployee() + "\n"
        + "4. PhoneNumber: " + " " + arrListEmployee[index].getPhoneNumber() + "\n"
        + "5. Education Background: " + " " + arrListEmployee[index].getEducationBackground() + "\n"
        + "6. Position: " + " " + arrListEmployee[index].getPosition() + "\n"
        + "7. Salary: " + " " + arrListEmployee[index].getSalary() + "\n"
        // + "11. TotalPays: " + " " + arrListEmployee[index].getTotalPays() + "\n"
        + "============== \n";
}