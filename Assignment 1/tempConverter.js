
let inputX = document.getElementById("tempFarr"); 

function celciusTemperature(){
          
    let tFarr = document.getElementById('tempFarr').value;

    let tCell = (tFarr - 32) * 5/9;            
    
    document.getElementById('tempCel').value = tCell;
}




  function kelvinTemperature(){
    let tFarr = document.getElementById('tempFarr').value;  
    
    let tCell= (tFarr - 32) * 5/9;
    
    let tKel = tCell + 273.15;
    
    document.getElementById('tempKel').value = tKel;
}


function clearAll() {
    
    inputX.value = null;

    document.getElementById("tempCel").value = " " ;

    document.getElementById("tempKel").value = " " ;
}