regexp = /^[_a-z0-9]{6,}$/;
function laAccountHopLe(str){
    regexp =/^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        console.log("Account Hop Le");
    } else {
        console.log("Account Khong Hop le");
    }
}