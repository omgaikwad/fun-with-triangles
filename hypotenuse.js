const sides = document.querySelectorAll(".side-inputs");
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputDiv = document.querySelector("#output-div");


function calculateSumOfSquares(a, b){
    const answer = a*a + b*b;
    return answer;
}

function calculateHypotenuse(){

    /// handling lack of input errors
    if(sides[0].value && sides[1].value){

        /// handling negative number input errors
        if(sides[0].value >=0 && sides[1].value >=0){
            const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    
            const hypotenuse = Math.sqrt(sumOfSquares);

            outputDiv.innerText = "Hypotenuse is: " + hypotenuse;
        }
        else{
            outputDiv.innerText = "Enter Positive Number only!!";
        }
        
    }

    else{
        outputDiv.innerText = "Enter all sides😡";
    }
    
}


calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);