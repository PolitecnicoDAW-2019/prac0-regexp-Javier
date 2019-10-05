define(["../const/constants"],function(constants){

    const validateName = name => {
        return constants.REGEXP.NAME.test(name);
    }

    const validateSurname = surname => {
        return constants.REGEXP.SURNAME.test(surname);
    }

    const validateAddress = address => {
        return constants.REGEXP.ADDRESS.test(address);
    }

    const isSpainChecked = radiobutton => {
        return radiobutton.checked;
    }

    /*const isUSAChecked = radiobutton => {
        return radiobutton.checked;
    }*/

    const validateCP = (radiobutton,code) => {
        if(!isSpainChecked(radiobutton)){
            return constants.REGEXP.USACP.test(code);
        }
        return constanst.REGEXP.ESCP.test(code);
    }

    const validateTelephoneNumber = (radiobutton,number) => {

    }

    return{
        validateName,
        validateSurname,
        validateAddress,
        validateCP
    }
})