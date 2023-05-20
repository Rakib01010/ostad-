<!DOCTYPE html>
<html>
<head>
  <title>BMI Calculator</title>
</head>
<body>
  <h1>BMI Calculator</h1>
  
  <form>
  
    <input type="number" id="weightInput" ><br>
    

    <input type="number" id="heightInput" ><br>
    
    <button type="button" id="calculateBtn">Calculate</button>
  </form>
  
  <div id="result"></div>

  <script>document.getElementById('calculateBtn').addEventListener('click', calculateBmi);

function calculateBmi() {
  var weightInput = document.getElementById('weightInput').value;
  var heightInput = document.getElementById('heightInput').value;

  if(  weightInput >=0 && heightInput >=0){

  var bmiValue =( weightInput / (heightInput * heightInput));

  document.getElementById('result').innerHTML = 'Your BMI is: ' + bmiValue.toFixed();

}else{
    result.innerHTML ="Give your weight and  height at the same time";
}
}
</script>
</body>
</html>
