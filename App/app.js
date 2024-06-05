/*-------------------------------------------------------------------------------------------
                                 //All variables defined below
-------------------------------------------------------------------------------------------*/

//holds the form variable. Used to identify when for is submitted to fire off calculatrResults function
   let UIloanFormVariable = document.querySelector( '#loan-form' );

//holds the loan amount the user typed in
   let UIamountVariable = document.querySelector( '#amount');

//holds the interest amount the user typed in
   let UIinterestVariable = document.querySelector( '#interest' );

//holds the years amount the user typed in
   let UIyearsVariable = document.querySelector( '#years' );

//used to display the loan amount's monthly payment
   let UImonthlyPaymentVariable = document.querySelector( '#monthly-payment' );

//used to display the total loan amount's payment
   let UItotalPaymentVariable = document.querySelector( '#total-payment' );

//used to display the total interest amount's  payment
   let UItotalInterestVariable = document.querySelector( '#total-interest' );

   let elements = document.querySelectorAll('.amount');

//block the loader and the results div from the get go
   document.querySelector('#results').style.display = 'none';
   document.querySelector('#loading').style.display = 'none';

/*-------------------------------------------------------------------------------------------
          //First check if the one or more of the inputs have been left empty 
-------------------------------------------------------------------------------------------*/

//add event listner submit to do calculateResults function
UIloanFormVariable.addEventListener( 'submit', function(e){

//the inputVarifier method returns an entire array
   let array =  inputVerifier();

//check the array. If there is no input or if the last element contains a 1 (explained in inputVerifier method)
   if( array.includes('') || array.pop()===1)
   {
   //then make those elements change to yellow
      elements.forEach((element) => 
      {
         if( element.value == "" || element.value < 0)
            element.className = 'bg-warning text-black';

         else
         element.className = 'bg-success text-black';

      });

   //also call error function to display error message
      errorFunction('Please check your amounts highlighted in yellow. Enter them again and proceed');
   }

//else if not empty and all numbers are positive, show the loading gif and go into calculateResults function
   else
   {
      document.querySelector('#results').style.display = 'none';
      document.querySelector('#loading').style.display = 'block';
      setTimeout(calculateResults, 2000);
   }

//this allows the form not to reload and display the gif or the invalid yellow input boxes
   e.preventDefault();
   
});

/*-------------------------------------------------------------------------------------------
            //main loan calculator function defined below. Formula is: A=P(1+i)^n
-------------------------------------------------------------------------------------------*/

function calculateResults(){

//holds original value typed in by user 
   const originalLoanAmount = parseFloat( UIamountVariable.value );

//holds original value typed in by user 
   const interestPercentageAmount = parseFloat( UIinterestVariable.value/100 )+1;

//holds original amount typed in by user 
   const yearsAmount = parseFloat( UIyearsVariable.value );

   const accumulatedAmountAfterPower = Math.pow(interestPercentageAmount, yearsAmount);

   const accumulatedAmountAfterPowerFinal = accumulatedAmountAfterPower.toFixed(3) * originalLoanAmount;

//monthly payments and valuesArray is the 1+ i^n part

   if( isFinite( accumulatedAmountAfterPowerFinal ) )
   {
         let x = accumulatedAmountAfterPowerFinal / 12;
         let A_P = accumulatedAmountAfterPowerFinal / originalLoanAmount;
         UImonthlyPaymentVariable.value = x.toFixed(2);
         UItotalPaymentVariable.value =  accumulatedAmountAfterPowerFinal.toFixed(2);
         UItotalInterestVariable.value = ( ( accumulatedAmountAfterPowerFinal - originalLoanAmount ) ).toFixed(2);

      //change the colour to f=green if successful
         UImonthlyPaymentVariable.className = 'bg-success text-white';
         UItotalPaymentVariable.className = 'bg-success text-white';
         UItotalInterestVariable.className = 'bg-success text-white';
         
      //show the results
         document.querySelector('#results').style.display = 'block';

      //hide the loading gif 
         document.querySelector('#loading').style.display = 'none';
      
      //set timeout after 15 seconds to reset
         setTimeout(function(){

            UIamountVariable.value =  '';
            UIinterestVariable.value = '';
            UIyearsVariable.value = ''; 
            document.querySelector('#results').style.display = 'none';
         }, 20000);
   }

   else
   {
   //if no amounts were entered, don't show the results anymore
      document.querySelector('#results').style.display = 'none';

   //if no amounts were entered, don't show the loader anymore
      document.querySelector('#loading').style.display = 'none';

      errorFunction( 'One of the numbers leads the calculation to be a number tending towards infinity' );
   }
}
/*-------------------------------------------------------------------------------------------
                           //helper functions  defined below. 
-------------------------------------------------------------------------------------------*/
function errorFunction( errorMessage ){

//holds the card
   let card = document.querySelector( '.card' );

//holds the heading
   let heading = document.querySelector( '.heading' );

//will hold the error div taht will be dynamically inserted
   let errorDiv = document.createElement( 'div');

//create the text not insie the error div that will be displayed
   errorDiv.className = 'alert alert-danger';

//append the text to the error div
   errorDiv.appendChild( document.createTextNode( errorMessage ) );

//insert error div at top of page
   card.insertBefore( errorDiv, heading );

//set timeout to disappear after 3 seconds. use 3000 because it is 3000 milliseconds (which is 3 seconds)
   setTimeout( function()
   {
      //remove the alert
         document.querySelector( '.alert' ).remove();

         elements.forEach((element) =>
         {
         //if a null or negative value, remove the value user typed in as revert to original
            if( element.value === "" || element.value < 0)
            {
               element.className = 'form-control';
               element.value = "";
            }

            else
            //else revert to original anyways
               element.className = 'form-control';
         });
   }, 3000 );
}

function inputVerifier()
{

//array to store the values
   const valuesArray = [];

//used to store any negative numbers found in values array
   let negativeCount = 0;

//push the node list values into the array
   elements.forEach((element) => {
      if( element.value == "" || element.value < 0)
      {
         valuesArray.push(element.value);
      }
   });

   for(count = 0; count < valuesArray.length; count++)
   {
      if(valuesArray[count] < 0)
         negativeCount++;
   }

//if at least one negative number is found in the array, push a 1 onto the end
   if(negativeCount > 0)
      valuesArray.push(1);

//else push a zero
   else 
      valuesArray.push(0);

//return the whole array
    return valuesArray;  
}