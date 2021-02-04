// Function to Get Number Information (including invalid input)
function getNumberInfo() {
    // Set Up Variable
    let txt="";
    // Get the value of the input field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length==0 || num<1 || num>3999 || !Number.isInteger(Number(num))) {
        txt += `Invalid input.  Please enter a whole number between 1 and 3999.`;
    } else {
        // Get number information
        txt += `You have entered the number ${num}.<p>`;
        txt += `Its roman numeral is ${integerToRoman(num)}.`
    }
    // Display Information in the browser
    document.getElementById("numinfo").innerHTML = txt;

}

// Function to Convert Integer to Roman Numeral
function integerToRoman(number) {
    // Set Up Variables
    let val=[1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let sym=["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i=12;
    let result="";

    while (number) {
        let div = Math.floor(number/val[i]);
        number %= val[i];

        while (div) {
            // Add the symbol to the result
            result += sym[i];
            div -= 1;
        }
        i -= 1;
    }

    // Return the result
    return result;
}

// Function to Clear Form
