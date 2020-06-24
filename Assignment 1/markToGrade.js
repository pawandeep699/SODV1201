const inputX = document.querySelector("#valueIn"); // input values.


const ansX = document.querySelector("#displayAns");  // For displaying answers.



const errX =document.querySelector("#error"); // For displaying errors.


const submitX = document.querySelector("#giveX"); // Submit Button.


const clearX = document.querySelector("#dis"); // Clear Button

                            

   
function answerX(num){    // Function to process the input value and give answers.

    

    num = inputX.value;

    let change = Number.parseInt(num);
    
    if(change > 90 && change <=100 ) {
       
        return document.getElementById("displayAns").textContent = " A";

    }


    else if (change> 80 && change<=90) {
       
        return document.getElementById("displayAns").textContent = " B";
    }


    else if (change>70 && change<=80) {
        
        return document.getElementById("displayAns").textContent = " C"; 
    }

    else if (change >50 && change<=70){
       
        return document.getElementById("displayAns").textContent = " D"; 
    }

    else if (change >= 0 && change <= 50 ) {
     
        return  document.getElementById("displayAns").textContent=" F";
    }

    else {
        return document.getElementById("displayAns").textContent="";
    }
}




function errorFux(num) {   // for displaying error on non-number inputs
    
  
    num = inputX.value;
    
   

    if (num>=0 && num<=100){

    return document.getElementById("error").textContent="";

    }

    else if(num > 100 ) {

        return document.getElementById("error").textContent = "Please enter a value, below 101";
        
    }

    else if (num < 0 )  {

        return document.getElementById("error").textContent="Error: enter a positive number ";
    }

    else {

        return document.getElementById("error").textContent="Error: enter a valid number ";
    }
    
}




function assignX() {               // funtion to call two other functions and assign values     

      ansX.value = answerX();                

      errX.value = errorFux();                

}


function eraseX() {        //clearing the values from input box, element showing answer and error.
    
    inputX.value = null;

    document.getElementById("displayAns").textContent = null;         

    document.getElementById("error").textContent = null;
}



submitX.addEventListener("click",assignX); // The Submit Button.

clearX.addEventListener("click",eraseX);   // The Clear Button