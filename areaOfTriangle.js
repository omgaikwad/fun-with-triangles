const baseSide = document.querySelector("#base-side");
const heightSide = document.querySelector("#height-side");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
const outputDiv = document.querySelector("#output-div");

const calculateArea = () => {
  /// handling lack of input errors
  if (baseSide.value && heightSide.value) {
    /// handling negative number input error
    if (baseSide.value > 0 && heightSide.value > 0) {
      const areaOfTriangle =
        0.5 * Number(baseSide.value) * Number(heightSide.value);
      outputDiv.innerText =
        "The area of Triangle is " + areaOfTriangle + " cm²";
    } else {
      outputDiv.innerText = "Enter positive numbers only!!";
    }
  } else {
    outputDiv.innerText = "Enter all sides😡";
  }
};

calculateAreaBtn.addEventListener("click", calculateArea);
