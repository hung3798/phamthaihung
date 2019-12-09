let arrListCustomer = [];

function addNewCustomer() {
    var customer = new Customer();
    customer.setNameCustomer(prompt("Enter Name Customer:"));
    customer.setIdCard(checkIdCard(prompt("Enter Id Card Customer:")));
    customer.setBirthdayCustomer(checkBirthDay(prompt("Enter Birthday Customer (dd/MM/YYYY):")));
    customer.setEmailCustomer(checkEmail(prompt("Enter email Customer:")));
    customer.setAddressCustomer(prompt("Enter Address Customer:"));
    customer.setTypeCustomer(prompt("Enter Type Customer:"));
    customer.setDiscount(checkDiscount(prompt("Enter Discount:")));
    customer.setNumberOfAccompanying(checkNumberOfAccompanying(prompt("Enter Number Of Accompanying:")));
    customer.setTypeRoom(prompt("Enter Type Room:"));
    customer.setRentDays(checkRentDays( prompt("Enter Number Of Accompanying:")));
    customer.setTypeService(prompt("Enter Type Service:"));

    arrListCustomer.push(customer);
    displayMainMenu();
}

function checkIdCard(idCard) {
    regexp = /^[0-9]{9}$/;
    if (regexp.test(idCard)) {
        alert("Id Card hop le");
        return idCard;
    } else {
        alert("Id Card khong hop le, vui long nhap lai!!!");
        checkIdCard(prompt("Enter Id Card Customer:"));
        return idCard;
    }
}

function checkBirthDay(birthDay) {
    regexp = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[6-9][0-9]|200[0-9])$/;
    if (regexp.test(birthDay)) {
        alert("Ngay sinh hop le");
        return birthDay;
    } else {
        alert("Ngay sinh khong hop le, vui long nhap lai!!!");
        checkBirthDay(prompt("Enter Birthday Customer (dd/MM/YYYY):"));
        return birthDay;
    }
}

function checkEmail(email) {
    regexp = /^[A-Za-z0-9]+@[A-Za-z0-9]+(\.com)$/;
    if (regexp.test(email)) {
        alert("Email hop le");
        return email;
    } else {
        alert("Email khong hop le, vui long nhap lai!!!");
        checkEmail(prompt("Enter email Customer:"));
        return email;
    }
}

function checkDiscount(discount) {
    regexp = /^[0-9]{1,3}$/;
    if (regexp.test(discount)) {
        alert("Discount hop le");
        return discount;
    } else {
        alert("Discount khong hop le, vui long nhap lai!!!");
        checkDiscount(prompt("Enter Discount:"));
        return discount;
    }
}

function checkNumberOfAccompanying(number) {
    regexp = /^[0-9]{1,2}$/;
    if (regexp.test(number)) {
        alert("Discount hop le");
        return number;
    } else {
        alert("Number Of Accompanying khong hop le, vui long nhap lai!!!");
        checkNumberOfAccompanying(prompt("Enter Number Of Accompanying:"));
        return number;
    }
}

function checkRentDays(rentDays) {
    regexp = /^[0-9]{1,2}$/;
    if (regexp.test(rentDays)) {
        alert("Type Service hop le");
        return rentDays;
    } else {
        alert("Type Service khong hop le, vui long nhap lai!!!");
        checkRentDays( prompt("Enter Number Of Accompanying:"));
        return rentDays;
    }
}

