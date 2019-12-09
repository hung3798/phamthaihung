let Employee = function () {
    this.setNameEmployee = function (name) {
        this.name = name;
    };
    this.getNameEmployee= function () {
        return this.name;
    };
    this.setIdCard = function (idCard) {
        this.idCard = idCard;
    };
    this.getIdCard = function () {
        return this.idCard;
    };
    this.setBirthdayEmployee = function (birthDay) {
        this.birthDay = birthDay;
    };
    this.getBirthdayEmployee = function () {
        return this.birthDay;
    };
    this.setEmailEmployee = function (email) {
        this.email = email;
    };
    this.getEmailEmployee = function () {
        return this.email;
    };
    this.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    this.setEducationBackground = function (educationBackground) {
        this.educationBackground = educationBackground;
    };
    this.setPosition = function (position) {
        this.position = position;
    };
    this.setSalary = function (salary) {
        this.salary = salary;
    };

    this.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    this.getEducationBackground = function () {
        return this.educationBackground;
    };
    this.getPosition = function () {
        return this.position;
    };
    this.getSalary = function () {
        if (this.position==="Manager") {
            return parseInt(this.salary) + 500;
        }
        else if (this.position==="Sale") {
            return  parseInt(this.salary) + 300;
        }
        else if (this.position==="Marketing") {
            return parseInt(this.salary) + 200;
        }
        else
            return this.salary;
    };

    // this.getRoomCharge = function () {
    //     return totalPays = 500 * Number.parseInt(this.rentDays) * (1 - Number.parseFloat(this.discount) / 100);
    // };
};