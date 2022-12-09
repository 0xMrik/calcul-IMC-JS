const BMIData = [
    {name: "Maigre", color: "midnightblue", range: [0, 18.5]},
    {name: "Bonne santé", color: "green", range: [18.5, 25]},
    {name: "Surpoids", color: "lightcoral", range: [25, 30]},
    {name: "Obésité modérée", color: "orange", range: [30, 35]},
    {name: "Obésité sévère", color: "crimson", range: [35, 40]},
    {name: "Obésité morbide", color: "purple", range: 40},
];

const formulaire = {

}

const form = document.querySelector("form");
form.addEventListener('submit', handleForm)

function handleForm(e) {
    e.preventDefault(); 
    calculateBMI();
}

const inputs = document.querySelectorAll("input")
console.log(inputs)

function calculateBMI() {
    const height = inputs[0].value; 
    const weight = inputs [1].value;

    console.log(height, weight)

    if (!height || !weight || height <= 0 || weight <= 0) {
        handleError(); 
        return
    }

    const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1) 
    console.log(BMI)
    //toFixed = on garde un chiffre après la virgule

    showResult(BMI)
}; 

const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError() {
    displayBMI.textContent = "Erreur !"; 
    result.style.color = "inherit"; 
    result.textContent = "insérez un nombre supérieur à 0"; 
}

function showResult(BMI){
    const rank = BMIData.find(data => {
        if (BMI >= data.range[0] && BMI < data.range[1]) return data; 
        else if(typeof Date.range === "number" && BMI >= data.range) return data
    })

    displayBMI.textContent = BMI; 
    displayBMI.style.color = `${rank.color}`
    result.textContent = `Résultat : ${rank.name}`
}

