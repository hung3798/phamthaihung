function laAccountHopLe(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if(regexp.test(str)){
        alert("Ten Account Hop Le");
    } else {
        alert("Ten Account Khong Hop Le");
    }
}