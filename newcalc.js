var formfld1 = document.getElementById('fld1');
var formfld2 = document.getElementById('fld2');
var result = document.getElementById('result');
var form = document.getElementById('fldinpt');

// Submit
form.addEventListener('submit', function (holdresults) {
    if (!formfld1.value || !formfld2.value) {
        alert("Please enter valid inputs")
    } else {
        var x = parseFloat(formfld1.value);
        var y = parseFloat(formfld2.value);
        var percent = (x / y) * 100;
        var perround = percent.toFixed(2);
        result.innerText = "Answer : " + perround + "%";
        holdresults.preventDefault();
    }
});

// Reset 
form.addEventListener('reset', function () {
    result.innerText = '';
});
