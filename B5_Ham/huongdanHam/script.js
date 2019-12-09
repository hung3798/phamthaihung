function square(number) {
    var resoul = number * number;
    return resoul;
}

function caculate(input) {
    input = document.getElementById("input").value;
    var resoul = square(input);
    document.getElementById("resoul").innerHTML = resoul;

}