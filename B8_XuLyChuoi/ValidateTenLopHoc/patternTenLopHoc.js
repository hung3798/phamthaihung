function tenLopHocHopLe(str) {
    regexp = /^[CAP][0-9]{4}[G-M]$/;
    if(regexp.test(str)){
        alert("Ten Lop Hoc Hop Le");
    } else {
        alert("Ten Lop Hoc Khong Hop Le");
    }
}
