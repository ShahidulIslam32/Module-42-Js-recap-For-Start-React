const addStorage = () => {
    let inputName = document.getElementById('nameId')
    let inputNameValue = inputName.value 
    let inputId = document.getElementById('userId')
    let inputIdValue = inputId.value

   if(inputNameValue && inputIdValue){
        localStorage.setItem(inputNameValue, inputIdValue)
   }
   else{
       alert ('You must need to write something !!')
       inputName.value = '';
       inputId.value = '';
       return
   }
   inputName.value = '';
   inputId.value = '';
    
}