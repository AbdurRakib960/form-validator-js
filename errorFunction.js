// set error function 

export function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error text 

    small.innerText = message;

    // add error style 
    
    formControl.className = 'form-control error'
    
}