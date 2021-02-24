
let firstName = ""
let state = ""
let userTemperature = ""
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

firstName = prompt("Enter your first name.")
state = prompt("Which state do you live in? NE or FL?")
userTemperature = Number(prompt("Enter the current temperature in your state."))

if (userTemperature <= 32 && state == "NE")
    console.log(`${firstName}, ${messages[0]}.`)
else if (userTemperature > 32 && userTemperature <= 50 && state == "NE")
    console.log(`${firstName}, ${messages[1]}.`)
else if (userTemperature > 32 && userTemperature <= 50 && state == "FL")
    console.log(`${firstName}, ${messages[2]}.`)
else (userTemperature > 50 && userTemperature <= 70 && state == "FL")
    console.log(`${firstName}, ${messages[3]}.`)
