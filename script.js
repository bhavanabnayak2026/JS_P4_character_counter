let userInput = document.getElementById('userInput')
let characterCount = document.getElementById('characterCount')

document.addEventListener("DOMContentLoaded", function() {
    ["input"].forEach(eventName => {
        userInput.addEventListener(eventName, function() {
            // if(event.key !== 'Enter') {
                count = userInput.value.length
                characterCount.innerHTML = count
            // }
        })
    })
})