//generating pin number
function pinGenerate(){
    const randomPin= Math.floor(Math.random() * 8999 + 1000);
    document.getElementById("generate-num").value = randomPin;
    document.getElementById("input-number").value='';
}

//submitting pin number

function inputButton(num){
    document.getElementById("input-number").value= document.getElementById("input-number").value+ num;
    
    
  
    
}
// clearing all input number

function clearNumber(){
    document.getElementById("input-number").value='';          
    
}

// removing value one by one
function removeNumber(){
    var stringInput = document.getElementById("input-number").value; 
    var inputLength = stringInput.length
    var remove = stringInput.slice(0,inputLength-1);
    document.getElementById("input-number").value = remove;
}

//matching pin numbers
  function matchPin(){
   
    let inputNumber = document.getElementById("input-number").value;
    let generatedNumber = document.getElementById("generate-num").value;

    if(inputNumber == generatedNumber){

    document.getElementById("matched").style.display= "block"; 
    document.getElementById("tryAgain").style.display= "none";
    document.getElementById("submitBtn").disabled = true;
     
   }
   if(inputNumber !== generatedNumber){

    document.getElementById("tryAgain").style.display= "block";
    document.getElementById("matched").style.display= "none";
    

   }
   if (inputNumber == "" && generatedNumber == "") {
     alert('No Pin/Please Generate Your Pin First');
     document.getElementById("tryAgain").style.display= "none";
     document.getElementById("matched").style.display= "none";
    
     }
     if(inputNumber.length <=0 || generatedNumber.length<=0){

        alert('No Pin/Please Generate Your Pin First');
        

        document.getElementById("tryAgain").style.display= "none";
        document.getElementById("matched").style.display= "none";
        
    
       }

    
}
    
// action left section


function actionLeft() {
    const inputNumber= document.getElementById("input-number").value;
    var stringAction= document.getElementById("actionLeft").innerText;
    var intAction = parseInt(stringAction);
    if (intAction > 0 && inputNumber.length>0){
        intAction--;
        const actionUpdate=document.getElementById("actionLeft");
        actionUpdate.innerText=intAction;
        
    }
    if (intAction == 0 ){
        document.getElementById("actionLeft").disabled = true;
        document.getElementById("submitBtn").disabled = true;
        
    }
    
    
        
}
