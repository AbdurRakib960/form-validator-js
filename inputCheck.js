import { email, user, password, checkPassword } from './script.js';
import { setErrorFor } from './errorFunction.js';
import { setSuccessFor } from './success.js';
import { isEmailValid } from './emailRegex.js';
import { userValidation } from './userRegex.js';
import { validPassword } from './passwordRegex.js';

export function inputCheck() {
    const userValue = user.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const checkPasswordValue = checkPassword.value;

    // user empty check
    if(userValue === '') {
        setErrorFor(user, "User can't be black")
    } else if(!userValidation(userValue)) {
        setErrorFor(user, "User name is not valid")
    }
     else {
        setSuccessFor(user)
    }

    // email empty check

    if(emailValue === '') {
        setErrorFor(email, "Email can't be black");
    }  else if(!isEmailValid(emailValue)) {
        setErrorFor(email, "email is not valid")
    }
    else {
        setSuccessFor(email)
    }

    // password empty check

    if(passwordValue === '') {
        setErrorFor(password, "Password can't be black");
    } else if(!validPassword(passwordValue)) {
        setErrorFor(password, "password must be 6 to 16 valid characters")
    }
     else {
        setSuccessFor(password)
    }

    // check password empty check

    if(checkPasswordValue === '') {
        setErrorFor(checkPassword, "Password can't be black");
    } else if(!validPassword(checkPasswordValue)) {
        setErrorFor(checkPassword, "password must be 6 to 16 valid characters")
    } 
    else {
        setSuccessFor(checkPassword)
        setErrorFor(password, "")
    }

    // password and checkPassword  check

    if(passwordValue !== checkPasswordValue) {
        setErrorFor(checkPassword, "Password doesn't match")
    }
}



