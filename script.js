//function ใช้สำหรับคำนวนค่า
function calculate_Bmi(weight, height) {
    height = height / 100
    let BmI = (weight / (height * height))
    return BmI;
}
// ดึงค่าจาก input
function BMI(value1, value2) {
    if (value1 && value2) {
        let bmi = calculate_Bmi(value1, value2); // คำนวณค่า BMI
        document.getElementById("result").innerHTML = bmi.toFixed(3) + " BMI"; // แสดงผลลัพธ์ BMI

        // ตรวจสอบเงื่อนไขจากค่า BMI
        if (bmi >= 30.0) {
            document.getElementById("Test_results").innerHTML = "ผลทดสอบ: อ้วนมาก";
        } else if (bmi >= 25.0 && bmi < 30.0) {
            document.getElementById("Test_results").innerHTML = "ผลทดสอบ: อ้วน";
        } else if (bmi >= 18.6 && bmi < 25.0) {
            document.getElementById("Test_results").innerHTML = "ผลทดสอบ: น้ำหนักปกติ เหมาะสม";
        } else if (bmi < 18.6) {
            document.getElementById("Test_results").innerHTML = "ผลทดสอบ: ผอมเกินไป";
        }
    } else {
        document.getElementById("result").innerHTML = "กรุณากรอกน้ำหนักและส่วนสูงให้ครบถ้วน";
        document.getElementById("Test_results").innerHTML = "กรุณากรอกน้ำหนักและส่วนสูงให้ครบถ้วน";
    }
}
// รีเซ็ค ค่าทั้งหมด
function resetFields() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerHTML = "ผลลัพธ์ BMI";
    document.getElementById("Test_results").innerHTML = "";
    document.getElementById('Test_results').innerHTML = "ผลทดสอบ";
}
