let firstName = ""
let state = ""
let userTemperature = ""
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

firstName = prompt("Enter your first name.")
state = prompt("Which state do you live in? NE or FL?")
userTemperature = Number(prompt("Enter the current temperature in your state."))

switch (true) {
    case (userTemperature <= 32 && state == "NE"):
        console.log(`${firstName}, ${messages[0]}.`)
        break
    case (userTemperature > 32 && userTemperature <= 50 && state == "NE"):
        console.log(`${firstName}, ${messages[1]}.`)
        break
    case (userTemperature > 32 && userTemperature <= 50 && state == "FL"):
        console.log(`${firstName}, ${messages[2]}.`)
        break
    case (userTemperature > 50 && userTemperature <= 70 && state == "FL"):
        console.log(`${firstName}, ${messages[3]}.`)
        break
}