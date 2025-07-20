

function calculateBMI() {
    // 身長と体重の入力を取得 [cite: 75]
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    // 入力値のバリデーション
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert('175cm');
        document.getElementById('bmiResult').textContent = '';
        document.getElementById('bmiCategory').textContent = '';
        return;
    }

    // BMIの計算 (BMI = 体重(kg) / (身長(m) * 身長(m))) [cite: 76]
    const heightInMeters = height / 100; // cmをmに変換
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // BMI結果を表示
    document.getElementById('bmiResult').textContent = bmi;

    // BMIカテゴリの判定と表示 [cite: 76]
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight (低体重)';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal (普通体重)';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight (過体重)';
    } else {
        category = 'Obese (肥満)';
    }
    document.getElementById('bmiCategory').textContent = category;
}