const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    const bmiresults = document.querySelector("#bmiresults");


    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height: ${height}`;
        return;
    }

    if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is ${bmi}`;

    if (bmi < 18.5) {
    bmiresults.innerHTML = "You are underweight.";
    bmiresults.style.color = "red";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiresults.innerHTML = "You are at a normal weight.";
    bmiresults.style.color = "yellow";
} else {
    bmiresults.innerHTML = "You are overweight.";
    bmiresults.style.color = "green";
}

});
                                                               //in the input that is why we have to convert  