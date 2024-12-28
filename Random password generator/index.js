// Random password generator
function generatePassword(Length,includeLowerCase, includeUpperCase,includeNumbers,includeSymbols) {

    const lowerCase = "abcdefghikklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCase : '';
    allowedChars += includeUpperCase ? upperCase : '';
    allowedChars += includeNumbers ? numbers : '';
    allowedChars += includeSymbols ? symbols : '';

    if (Length <= 0){
        return `(Password length must be atleast 1)`;
    }
    if(allowedChars.length === 0){
        return `(Please select atleast one character type)`;
    }

    for(let i =0; i < Length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;

}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                includeUpperCase,
                                includeNumbers,
                                includeLowerCase,
                                includeSymbols);


console.log(`Generated password: ${password}`);