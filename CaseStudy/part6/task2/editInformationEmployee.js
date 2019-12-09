function editInformationEmployee() {
    choose = prompt("Chọn nhân viên muốn edit \n" + get2InforEmployee() + arrListEmployee.length + ".Back");
    switch (choose) {
        case (arrListEmployee.length) + "":
            displayMainMenu();
            break;
        default:
            displayEditEmployee(choose);
    }
}
function displayEditEmployee(index) {
    choose = prompt("Chọn đối tượng cần chỉnh sửa: \n" + getInformationEmployee(index)
        + 8 + ".Back");
    processEditEmployee(index);
}

function processEditEmployee(index) {
    switch (choose) {
        case "0":
            arrListEmployee[index].setNameEmployee(prompt("Nhập nội dung muốn thay đổi"));
            displayEditEmployee(index);
            break;
        case "1":
            arrListEmployee[index].setIdCard(prompt("Nhập nội dung muốn thay đổi"));
            displayEditEmployee(index);
            break;
        case "2":
            arrListEmployee[index].setBirthdayEmployee(prompt("Nhập nội dung muốn thay đổi"));
            displayEditEmployee(index);
            break;
        case "3":
            arrListEmployee[index].setEmailEmployee(prompt("Nhập nội dung muốn thay đổi"));
            displayEditEmployee(index);
            break;
        case "4":
            arrListEmployee[index].setPhoneNumber(prompt("Nhập nội dung muốn thay đổi"));
            displayEditEmployee(index);
            break;
        case "5":
            arrListEmployee[index].setEducationBackground(prompt("Nhập nội dung muốn thay đổi"));
            displayEditEmployee(index);
            break;
        case "6":
            arrListEmployee[index].setPosition(prompt("Nhập nội dung muốn thay đổi"));
            displayEditEmployee(index);
            break;
        case "7":
            arrListEmployee[index].setSalary(prompt("Nhập nội dung muốn thay đổi"));
            displayEditEmployee(index);
            break;
        case "8":
            displayMainMenu();

    }
};