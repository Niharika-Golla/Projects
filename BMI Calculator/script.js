function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight && height) {
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);
        bmi = bmi.toFixed(2);

        var result = document.getElementById('result');
        result.innerHTML = 'Your BMI is ' + bmi;

        if (bmi < 18.5) {
            result.innerHTML += '<br>Category: Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerHTML += '<br>Category: Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            result.innerHTML += '<br>Category: Overweight';
        } else {
            result.innerHTML += '<br>Category: Obesity';
        }
    } else {
        alert('Please enter both weight and height');
    }
}
