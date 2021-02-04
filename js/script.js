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