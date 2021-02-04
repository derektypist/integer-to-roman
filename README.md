# Integer to Roman

The purpose of this project is to convert an integer (whole number) to its roman numeral.
For example, the number 1990 is MCMXC in Roman Numerals.

## UX

As a user, if I input a number less than 1 or greater than 3999, I get an error message:

`Invalid input.  Please enter a whole number between 1 and 3999.`

As a user, if I do not enter anything in the input field, I get an error message:

`Invalid input.  Please enter a whole number between 1 and 3999.`

As a user, if I enter a number, but it is not an integer.  For example, I enter a non-integer
such as 65.7, I get an error message:

`Invalid input.  Please enter a whole number between 1 and 3999.`

As a user, if I enter anything other than a number (e.g. a string such as `x`), I get an error message:

`Invalid input.  Please enter a number between 1 and 3999.`

As a user, assuming that I make a valid input, I should get the number entered and its roman
numeral.

As a user, every time I enter a value and hit the submit button, I get fresh information.
As a user, when I hit the Reset button, I get 
As a user, I expect a placeholder on the input field.  When I hover over the input field, I get
a screentip.

Here is a list of the Roman Symbols including its subtractive cases

    Symbol          Value
    I               1
    IV              4
    V               5
    IX              9
    X               10
    XL              40
    L               50
    XC              90
    C               100
    CD              400
    D               500
    CM              900
    M               1000

Number ranges from 1 to 3999.

**Algorithm to convert integer to Roman Numeral**

Compare given number with the base values in the order 1000, 900, 500, 400, 100, 90, 50, 40, 10,
9, 5, 4 and 1.  Base value which is smaller or equal to the given number will be the initial base
(largest base value).  Divide the number by its largest base value, the corresponding base symbol
will be repeated quotient times, the remainder will then become the number for future divisions and
repetitions.  The process will be repeated until the number becomes zero.

**Example to demonstrate above algorithm:**

    Convert 1990 to its Roman Numerals
    Output is MCMXC

Explanation:

Step 1

- Initial Number is 1990
- Since 1990 >= 1000, initial base value is 1000
- Divide 1990 by 1000, Quotient is 1, Remainder is 990.  Corresponding symbol M will be repeated once.

Step 2

- Now, number is 990
- 1000 > 990 >= 900, largest base value will be 900
- Divide 990 by 900, Quotient is 1, Remainder is 90.  Corresponding symbol CM will be repeated once.

Step 3

- Now number is 90
- 100 > 90 >= 90, largest base value will be 90
- Divide 90, by 90, Quotient is 1, Remainder is 0.  Corresponding symbol XC will be repeated once.

Step 4

- Finally number is 0, algorithm stops here.
- Output obtained is **MCMXC**.

## Features

Features validation of numeric input.  Conversion of integer to Roman Numeral.  Reset button, in case
there is an emergency.

## Technologies

This project uses HTML5, CSS3, JavaScript, Bootstrap 5.0.0-beta1 and Google Fonts (e.g. Roboto).
JavaScript is used to validate numeric input.












## Credits

Acknowledgements

- [Geeks for Geeks - Converting Decimal Number to Roman Numerals](https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/)
- [w3schools.com](https://www.w3schools.com)
