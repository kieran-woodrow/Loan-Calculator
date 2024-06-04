# Loan-Calculator
 
This project is a simple compound interest loan calculator project. It only produces a valid calculation for an annual time period. 
In this project, i used pure javascript for all the functionality. I used html to create the form and also used Bootstrap for the styling of the form. 

The project consists of 2 files. An 'index.html' and an 'app.js' file. The javascript code is well commented and should be easy to read and follow the logic flow.

The formula used was the basic annual compound interest formula A = P (1+i)^n where:
A = Accumulated amount
P = Original loan amount
i = Percentage rate
n = Amount of years

The point of this project was not to offer different calculations for other time periods such as semi-annualy, monthly or quarterly - but rather the point was to build a fully functioning and easy to navigate user interface where the user can type in the loan amount, percentage amount and the time period in which to pay off the amount. If the amount is a negative number or the input is simply left blank, the input box is highlighted in a yellow and a red warning appears for 3 seconds asking the user to check their numberd and re-type the numbers. The user only has to re-type the numbers that were highlighted. The correct numbers will be highlighted green and will remain so that the user does not have to re-type those ones in.  All of this is done dynamically. If all the numbers are correct, a loading frame appears after 2 seconds and shows the calculations. The calculations are done instantly, however, the loading frame provides the user with some level of satisfaction that the calculation is being processed. The answers are styled in green to add some colour. The answers then disappear after 20 seconds and you can try another calculation by entering new values. All of this is done dynamically as well.

# How to run
 Download all files and just open index.html
