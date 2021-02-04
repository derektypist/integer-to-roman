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
(largest base value) 






## Credits

Acknowledgements

- [Geeks for Geeks - Converting Decimal Number to Roman Numerals](https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/)
- 
