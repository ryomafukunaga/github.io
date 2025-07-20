function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert('Please enter your height and weight.');
        document.getElementById('bmiResult').textContent = '';
        document.getElementById('bmiCategory').textContent = '';
        return;
    }

    
    const heightInMeters = height / 100; 
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);


    document.getElementById('bmiResult').textContent = bmi;


    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    document.getElementById('bmiCategory').textContent = category;
}