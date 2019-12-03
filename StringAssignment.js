function paddedNumber() {
    // // Write a function to manipulate the provided string
    // // 1. Padded Number
    // // Pad given single numbers in array to look like "10", "05", "16", "02"
    const array = ['2', '4', '25', '10', '3']
    const paddedNum = (arr) => {
        return arr.map(number => number < 10 ? `0${number}` : number);
    }
    console.log(paddedNum(array));
}

function cameltoTitle() {
    // // // // 2. Camel-to-Title
    // // // Convert a given sentence from camelCase to Title Case
    const camelCase = "the simplestThings in LIFE are alwaysThe best"
    const array = camelCase.split(" ")
    const titleCase = text => {
        let title = []
        for (let i = 0; i < text.length; i++) {

            let word = text[i]
            let index = 0
            let flag = false
            for (let j = 1; j < text[i].length - 1; j++) {
                if ((word[j] == word[j].toLowerCase() && word[j + 1] == word[j + 1].toUpperCase())) {
                    title.push(word.slice(index, j + 1))
                    index = j + 1
                    flag = true
                }
            }
            if (flag === true) {
                title.push(word.slice(index, (word.length)))
                // console.log(title)
            }
            else {
                text[i] = text[i].charAt(0).toUpperCase() + text[i].substr(1).toLowerCase()
                title.push(text[i])
            }
        }
        // console.log(title)
        for (let i = 0; i < title.length; i++) {
            title[i] = title[i].charAt(0).toUpperCase() + title[i].substr(1).toLowerCase()
        }
        console.log(title.join(" "))
    }
    titleCase(array)
}

function titleToCamel() {
    // // 3. Title-to-Camel
    // // Convert the Title Case back to camelCase
    const newTitle = "These Words Should Go In Pairs"
    array = []
    const newWord = newTitle.split(" ")
    const newCamel = text => {
        for (let i = 0; i < text.length - 1; i++) {
            array.push(text[i].substr(0).toLowerCase() + text[i + 1].charAt(0).toUpperCase() + text[i + 1].substr(1).toLowerCase())
            i++
        }
        console.log(array.join(" "))
    }
    newCamel(newWord)
}

function pigLaten() {
    // 4. Pig Latin
    // Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
    const word = "hamlet"
    const pigLatin = text => {
        if (text.charAt(1) == 'a' || text.charAt(1) == 'e' || text.charAt(1) == 'i' || text.charAt(1) == 'o' || text.charAt(1) == 'u') {
            text = text.substr(1) + text.charAt(0) + "ay"
        }
        else if (text.charAt(0) == 'a' || text.charAt(0) == 'e' || text.charAt(0) == 'i' || text.charAt(0) == 'o' || text.charAt(0) == 'u') {
            text = text + "ay"
        }
        else {
            for (let j = 0; j < text.length; j++) {
                if (text.charAt(j) == 'a' || text.charAt(j) == 'e' || text.charAt(j) == 'i' || text.charAt(j) == 'o' || text.charAt(j) == 'u') {
                    ind = j
                    break
                }
            }
            text = text.substr(j) + text.substr(0, j) + "ay"
        }
        console.log(text)
    }

    pigLatin(word);
}



paddedNumber()
console.log("\n")
cameltoTitle()
console.log("\n")
titleToCamel()
console.log("\n")
pigLaten()