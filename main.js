
function clearForm() {
    const form = document.getElementById("mainForm");
    form.reset()
}

function calculate() {
    const starting_weight = document.getElementById("weight")
    const starting_BF = document.getElementById("bodyfat")
    const starting_muscle = document.getElementById("muscleMass")
    const starting_bone = document.getElementById("boneMass")

    const goal_weight = document.getElementById("goalWeight")
    const goal_fat = document.getElementById("goalFat")
    const goal_muscle = document.getElementById("goalMuscle")

    if (starting_weight.textContent == "" || 
        starting_BF == "" || 
        starting_muscle == "" || 
        starting_bone == "") {
            return
    }

}