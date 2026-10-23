console.log("PASSWORD GENERATOR")

// RANDOM PASSWORD GENERATOR


// generate function
function generatePassword(length, includeLowercase,includeUppercase, includeNUmbers, includeSymbols){

    // value of the conditions
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%&*_+?";


    let allowedChars = ""; 
    let password = "";

    // 
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNUmbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";


    // testing out allowedChars variable;
    // console.log(allowedChars); // should print all values meeting the variables - and also conditions --



    // condition to make sure password length must be > 1
    if(length <= 0){
        return `(password length must be at least 1)`;
    } 

    // condition to check if any rule is followed
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    // to select the random character from all content 
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }





    return password;

}



// condition that we need
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

// password value ..
const password = generatePassword(passwordLength,
                                    includeLowercase,
                                    includeUppercase,
                                    includeNumber,
                                    includeSymbols);


console.log(`Generated password: ${password}`);

// note:
// Declare your variables first, then declare your functions, then call your functions. Just for anyone reading comments.