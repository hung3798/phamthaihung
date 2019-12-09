function laPhoneNumberHopLe(str) {
    regexp = /^(\([0-9]{2}\))(-\([0][0-9]{9}\))$/;
    if(regexp.test(str)){
        alert("Ten Phone Number Hop Le");
    } else {
        alert("Ten Phone Number Khong Hop Le");
    }
}