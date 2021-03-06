const inputs = document.querySelectorAll(".input-angles");
const isItTriangleBtn = document.querySelector("#is-it-triangle-btn");
const outputDiv = document.querySelector("#output-div");

const calculateSumOfAngles = (a, b, c) => {
  const sumOfAngles = a + b + c;
  return sumOfAngles;
};

const isTriangle = () => {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  /// Handling lack of input errors
  if (inputs[0].value && inputs[1].value && inputs[2].value) {
    /// Handling Negative input errors
    if (inputs[0].value >= 0 && inputs[1].value >= 0 && inputs[2].value >= 0) {
      if (sumOfAngles === 180) {
        outputDiv.innerText = "🚀Yay, It Is a Triangle!!";
      } else {
        outputDiv.innerText = "😢Oh, It is NOT a triangle!!";
      }
    } else {
      outputDiv.innerText = "Angles should not be Negative!";
    }
  } else {
    outputDiv.innerText = "Enter All Angles😡";
  }
};

isItTriangleBtn.addEventListener("click", isTriangle);
