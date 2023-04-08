const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);


  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obese";
  }
  document.querySelector("#result").innerHTML = `<br>Your BMI is <br><br><span id="result" style="background-color: #eeeced; color: #4f7df9; padding: 5px 10px; border-radius: 5px;">${BMI}</span>`;

  document.querySelector(".comment").innerHTML = `<span id="comment" style="color: #4f7df9; font-weight: bold; border: dashed 1px;">You are ${status}</span>`;
});
