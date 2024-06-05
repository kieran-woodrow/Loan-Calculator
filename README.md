
# 🏷️ Project Name

A simple compound interest loan calculator project

---
## 🗂️ Table Of Contents

- [Project Overview](#-project-overview)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Running the Project](#-running-the-project)
- [Screenshots](#-screenshots)
---

## 📚 Project Overview

This project is a simple compound interest loan calculator project. It only produces a valid calculation for an annual time period. 
In this project, i used pure javascript for all the functionality. I used html to create the form and also used Bootstrap for the styling of the form. 

The project consists of 2 files. An 'index.html' and an 'app.js' file. The javascript code is well commented and should be easy to read and follow the logic flow.

The formula used was the basic annual compound interest formula A = P (1+i)^n where:
A = Accumulated amount
P = Original loan amount
i = Percentage rate
n = Amount of years

The point of this project was not to offer different calculations for other time periods such as semi-annualy, monthly or quarterly - but rather the point was to build a fully functioning and easy to navigate user interface where the user can type in the loan amount, percentage amount and the time period in which to pay off the amount. If the amount is a negative number or the input is simply left blank, the input box is highlighted in a yellow and a red warning appears for 3 seconds asking the user to check their numberd and re-type the numbers. The user only has to re-type the numbers that were highlighted. The correct numbers will be highlighted green and will remain so that the user does not have to re-type those ones in.  All of this is done dynamically. If all the numbers are correct, a loading frame appears after 2 seconds and shows the calculations. The calculations are done instantly, however, the loading frame provides the user with some level of satisfaction that the calculation is being processed. The answers are styled in green to add some colour. The answers then disappear after 20 seconds and you can try another calculation by entering new values. All of this is done dynamically as well.

---

## 🛠️ Technology Stack 

### Project code language used

 ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

 ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

 ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

 ![CSS3](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

## 💻 IDE

 ![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## 📝 Installation

1. Clone the repository
2. Navigate to the main directory. 

---

## 🎮 Usage

Use any browser. I prefer Chrome.

---

## 🏃🏻‍♂️ Running The Project

1. Open `index.html`.

---

## 📷 Screenshots

![add a loan](https://github.com/kieran-woodrow/Loan-Calculator/blob/main/Assets/Screenshot%202024-06-05%20at%2007.35.54.png)

![successful loan](https://github.com/kieran-woodrow/Loan-Calculator/blob/main/Assets/Screenshot%202024-06-05%20at%2007.36.10.png)

![error management](https://github.com/kieran-woodrow/Loan-Calculator/blob/main/Assets/Screenshot%202024-06-05%20at%2007.36.57.png)

![loader](https://github.com/kieran-woodrow/Loan-Calculator/blob/main/Assets/Screenshot%202024-06-05%20at%2007.37.20.png)
