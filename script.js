//random number generation
document.getElementById("generate-pin").addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * 8999 + 1000);
    document.getElementById("random-number").value = randomNumber;
    document.getElementById("pin-number").value = "";
})

//enter pin num
function inputNumber(number){
    document.getElementById("pin-number").value = document.getElementById("pin-number").value+number;
}
//clear all digit by C
function clearAll(){
    document.getElementById("pin-number").value = "";
}
// remove digit one by one
function removeNumber(){
    var pinNumber = document.getElementById("pin-number").value;
    var pinNumberLength = pinNumber.length;
    document.getElementById("pin-number").value = pinNumber.slice(0,pinNumberLength-1);

}
// pin mathcer 
function submitButton(){  
        if(document.getElementById("random-number").value == parseInt(document.getElementById("pin-number").value)){
            document.getElementById("pin-not-match").style.display = 'none';
            document.getElementById("pin-match").style.display = 'block';
            document.getElementById("submit-button").disabled = true;
        }
        else{            
            document.getElementById("pin-match").style.display = 'none';
            document.getElementById("pin-not-match").style.display = 'block';
        }  
}

//3 try left
function leftAction() {
    const inputNumber= document.getElementById("pin-number").value;
    var stringAction= document.getElementById("left-action").innerText;
    var intAction = parseInt(stringAction);
    if (intAction > 0 && inputNumber.length>0){
        intAction--;
        const actionUpdate=document.getElementById("left-action");
        actionUpdate.innerText=intAction;       
    }
    if (intAction == 0 ){
        document.getElementById("left-action").disabled = true;
        document.getElementById("submit-button").disabled = true;    
    }      
}
