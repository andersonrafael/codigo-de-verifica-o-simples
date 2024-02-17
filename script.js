document.getElementById('input1').addEventListener('input', function () {
    if (this.value.length >= 9) {
        document.getElementById('input2').focus();
    }
});
document.getElementById('input2').addEventListener('input', function () {
    if (this.value.length >= 9) {
        document.getElementById('input3').focus();
    }
});
document.getElementById('input3').addEventListener('input', function () {
    if (this.value.length >= 9) {
        document.getElementById('input4').focus();
    }
});